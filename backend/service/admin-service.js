import models from "../DateTransferObj/modelsDTO.js";
import AppiError from "../exceptions/appi-errors.js";
import productRepo from "../repository/productRepo.js";
import UserRepository from "../repository/userRepo.js";
const userRepo = new UserRepository();
export const getAllUsers = async () => {
  const users = await userRepo.getAll();
  return users;
};

export const updateUser = async (userId, newData) => {
  return await userRepo.update(userId, newData);
};

export const deleteUser = async (userId) => {
  return await userRepo.deleteUser(userId);
};

export const changeRole = async (id, data) => {
  return await userRepo.update(id, data);
};

export const CreateProduct = async (data) => {
  const { category, ...cleanData } = data;
  if (!models[category]) {
    throw AppiError.BadRequest(`Категорії ${data.category} не існує`);
  }
  return await productRepo.create(category, cleanData);
};

export const DeleteProduct = async (prodId, category) => {
  const isDeleted = await productRepo.remove(category, prodId);
  if (!isDeleted) {
    throw AppiError.NotFound("Такого продукту нема");
  }
  return isDeleted;
};

export const UpdateProduct = async (prodId, data) => {
  const { category, ...cleanData } = data;
  const UpdatedProduct = await productRepo.update(category, prodId, cleanData);
  if (!UpdateProduct) {
    throw AppiError.NotFound("Такого продукту нема");
  }
  return UpdatedProduct;
};
