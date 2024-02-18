import * as UserService from '../service/user-service.js';
import { loginSchema, registerSchema } from '../validations/userValidation.js';
export const register = async (req, res, next) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ message: `Помилка валідації: ${error.details[0].message}` });

    const { email, name, phone, password } = req.body;
    const userData = await UserService.registerUser(email, name, phone, password);
    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.json(userData);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: `Помилка валідації: ${error.details[0].message}` });
    const { email, password } = req.body;
    const userData = await UserService.loginUser(email, password);
    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.json(userData);
  } catch (err) {
    next(err);
  }
};

export const activateAccount = async (req, res, next) => {
  try {
    const activationLink = req.params.link;
    await UserService.activateAccount(activationLink);
    return res.redirect(process.env.CLIENT_URL);
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const token = await UserService.logOut(refreshToken);
    console.log(token);
    res.clearCookie('refreshToken');
    return res.status(200).json({ message: 'OK' });
  } catch (err) {
    next(err);
  }
};

export const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken: _refreshToken } = req.cookies;
    const userData = await UserService.refresh(_refreshToken);
    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.json(userData);
  } catch (err) {
    next(err);
  }
};

export const Test = async (_, res) => {
  res.json({ message: 'Ok' });
};
