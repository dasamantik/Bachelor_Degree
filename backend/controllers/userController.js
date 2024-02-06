import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
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

    const newUser = new User({
      email,
      passwordHash,
      phone,
      name,
    });

    const user = await newUser.save();

    const token = jwt.sign({ _id: user._id }, "secret123", {
      expiresIn: "30d",
    });

    res.json({ ...user._doc, token });
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

    const token = jwt.sign({ _id: user._id }, "secret123", {
      expiresIn: "30d",
    });

    res
      .cookie("access_token", token, { httpOnly: false })
      .status(200)
      .json({ message: "OK" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Неможливо увійти" });
  }
};
