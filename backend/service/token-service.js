//import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import tokenModel from '../models/tokenModel.js';

//dotenv.config();

export const generateTokens = (payload) => {
  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '30m',
  });
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '30d',
  });
  return {
    accessToken,
    refreshToken,
  };
};

export const saveToken = async (userId, refreshToken) => {
  const tokenData = await tokenModel.findOne({ user: userId });
  if (tokenData) {
    tokenData.refreshToken = refreshToken;
    return tokenData.save();
  }
  const token = await tokenModel.create({ user: userId, refreshToken });
  return token;
};

export const removeToken = async (refreshToken) => {
  const tokenData = await tokenModel.findOneAndDelete({ refreshToken });
  return tokenData;
};

export const validateAccesToken = (token) => {
  try {
    const data = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    return data;
  } catch (err) {
    return null;
  }
};

export const validateRefreshToken = (token) => {
  try {
    const data = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    return data;
  } catch (err) {
    return null;
  }
};

export const findToken = async (token) => {
  const tokenData = await tokenModel.findOne({ token });
  return tokenData;
};
