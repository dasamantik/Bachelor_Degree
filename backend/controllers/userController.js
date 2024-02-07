import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import UserDto from "../DateTransferObj/userDTO.js";
import User from "../models/userModel.js";
import MailService from "../service/mail-service.js";
import * as Token from "../service/token-service.js";
import { loginSchema, registerSchema } from "../validations/userValidation.js";

export const register = async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error)
      return res
        .status(400)
        .json({ message: "Помилка валідації: " + error.details[0].message });

    const { email, name, phone, password } = req.body;
    const InUse = await User.findOne({ email }, { _id: true });
    if (InUse)
      return res
        .status(400)
        .json({ message: "Електронна адресса вже зареєстрована " });

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const activationLink = uuidv4();
    const newUser = new User({
      email,
      passwordHash,
      phone,
      name,
      activationLink,
    });

    const user = await User.create(newUser);
    const mailService = new MailService();
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );
    const userDto = new UserDto(user);
    const tokens = Token.generateTokens({ ...userDto });
    await Token.saveToken(userDto.id, tokens.refreshToken);
    res.cookie("refreshToken", tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.json({ ...user._doc, ...tokens });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Неможливо зареєструвати" });
  }
};

export const login = async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error)
      return res
        .status(400)
        .json({ message: "Помилка валідації: " + error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(400)
        .json({ message: "Перевірте введені данні або зареєструйтеся." });

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.passwordHash
    );
    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({ message: "Перевірте введені данні або зареєструйтеся." });

    res
      .cookie("access_token", { httpOnly: false })
      .status(200)
      .json({ message: "OK" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Неможливо увійти" });
  }
};

export const activateAccount = async (req, res, next) => {
  try {
    const activationLink = req.params.link;
    const user = await User.findOne({ activationLink });
    if (!user) {
      throw new Error("Некоректне посиляння");
    }
    user.isActivated = true;
    await user.save();
    return res.redirect(process.env.CLIENT_URL);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Неможливо підтвердити" });
  }
};
