import models from "../DateTransferObj/modelsDTO.js";
import AppiError from "../exceptions/appi-errors.js";
import productRepo from "../repository/productRepo.js";
import userRepository from "../repository/userRepo.js";

export const getAllUsers = async () => {
  const users = await userRepository.getAll();
  return users;
};

export const getUserById = async (userId) => {
  return await userRepository.getUserById(userId);
};

export const updateUser = async (userId, newData) => {
  return await userRepository.updateUser(userId, newData);
};

export const deleteUser = async (userId) => {
  return await userRepository.delete(userId);
};

export const changeRol = async (id, data) => {
  return await userRepository.update(id, data);
};

export const CreateProduct = async (data) => {
  const { category, ...cleanData } = data;
  if (!models[category]) {
    throw AppiError.BadRequest(`Категорії ${data.category} не існує`);
  }
  return await productRepo.create(category, cleanData);
};
