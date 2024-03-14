import * as userService from "../service/user-service.js";
import { loginSchema, registerSchema } from "../validations/userValidation.js";

export const register = async (request, reply) => {
  try {
    const { error } = registerSchema.validate(request.body);
    if (error)
      return reply
        .status(400)
        .send({ message: `Помилка валідації: ${error.details[0].message}` });
    const { email, name, phone, password } = request.body;
    const userData = await userService.userRegistration(
      email,
      name,
      phone,
      password
    );
    reply.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    reply.status(200).send({ data: userData });
  } catch (err) {
    reply.send(err);
  }
};

export const login = async (request, reply) => {
  try {
    const { error } = loginSchema.validate(request.body);
    if (error)
      return reply
        .status(400)
        .json({ message: `Помилка валідації: ${error.details[0].message}` });
    const { email, password } = request.body;
    const userData = await userService.loginUser(email, password);
    reply.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    reply.send(userData);
  } catch (err) {
    reply.send(err);
  }
};

export const activateAccount = async (request, reply) => {
  try {
    const activationLink = request.params.link;
    await userService.activateAccount(activationLink);
    return reply.redirect(process.env.CLIENT_URL);
  } catch (err) {
    reply.send(err);
  }
};

export const logout = async (request, reply) => {
  try {
    const { refreshToken } = request.cookies;
    const token = await userService.logOut(refreshToken);
    console.log(token);
    reply.clearCookie("refreshToken");
    return reply.status(200).send({ message: "OK" });
  } catch (err) {
    reply.send(err);
  }
};

export const refreshToken = async (request, reply) => {
  try {
    const { refreshToken: _refreshToken } = request.cookies;
    const userData = await userService.refresh(_refreshToken);
    reply.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    reply.send(userData);
  } catch (err) {
    reply.send(err);
  }
};

export const Test = async (_, reply) => {
  reply.send({ message: "Ok" });
};
