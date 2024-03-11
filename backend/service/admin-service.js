import User from "../models/userModel.js";

export const getAllUsers = async () => {
  const users = await User.find({}).lean().exec();
  return users;
};
