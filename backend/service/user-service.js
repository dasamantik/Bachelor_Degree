import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import UserDto from "../DateTransferObj/userDTO.js";
import AppiError from "../exceptions/appi-errors.js";
import userRepository from "../repository/userRepo.js";
import MailService from "../service/mail-service.js";
import * as Token from "../service/token-service.js";

const generateTokensPair = async (user) => {
  const userDTO = new UserDto(user);
  const tokens = Token.generateTokens({ ...userDTO });
  await Token.saveToken(userDTO.id, tokens.refreshToken);
  return { ...tokens, user: userDTO };
};

export const registerUser = async (email, phone, name, password) => {
  const InUse = await userRepository.findByEmail(email);
  if (InUse) {
    throw AppiError.BadRequest(
      `Електронна адреса ${email} вже використовується`
    );
  }
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);
  const activationLink = uuidv4();
  const user = await userRepository.create(
    email,
    passwordHash,
    phone,
    name,
    activationLink
  );
  const mailService = new MailService();
  await mailService.sendActivationMail(
    email,
    `${process.env.API_URL}/activate/${activationLink}`
  );
  const data = generateTokensPair(user);
  return data;
};

export const loginUser = async (email, password) => {
  const user = await userRepository.findByEmail(email);
  if (
    !user ||
    !(await bcrypt.compare(password, user.passwordHash)) ||
    user.isActivated === false
  ) {
    throw AppiError.UnauthorizedError();
  }
  const data = generateTokensPair(user);
  return data;
};

export const activateAccount = async (activationLink) => {
  const user = await userRepository.findByParam(activationLink);
  if (!user) {
    throw AppiError.BadRequest("Некоректне посиляння");
  }
  user.isActivated = true;
  await user.save();
};

export const logOut = async (refreshToken) => {
  const token = await Token.removeToken(refreshToken);
  return token;
};

export const refresh = async (refreshToken) => {
  if (!refreshToken) {
    throw AppiError.UnauthorizedError();
  }
  const userData = Token.validateRefreshToken(refreshToken);
  const tokenFromDb = await Token.findToken(refreshToken);
  if (!userData || tokenFromDb) {
    throw AppiError.UnauthorizedError();
  }
  const user = await userRepository.findById(userData.id);
  const data = generateTokensPair(user);
  return data;
};
