import * as AdminService from "../service/admin-service.js";

export const getUsers = async (request, reply) => {
  try {
    const users = await AdminService.getAllUsers();
    reply.send(users);
  } catch (err) {
    reply.send(err);
  }
};

export const deleteUser = async (request, reply) => {
  try {
    const removedUser = await AdminService.deleteUser(request.params.id);
    reply.send({
      message: `Користувач з id ${removedUser._id} був видалений.`,
    });
  } catch (error) {
    reply.send(`Помилка при видаленні користувача ${error}`);
  }
};

export const changeRole = async (request, reply) => {
  try {
    const { userId, rol } = request.body;
    await AdminService.changeRole(userId, rol);
  } catch (error) {
    reply.send(`Помилка при зміні ролі користувача: ${error}`);
  }
};

export const addProductToStock = async (request, reply) => {
  try {
    const productData = request.body;
    const createdProduct = await AdminService.CreateProduct(productData);
    reply.send(`Товар ${createdProduct} успішно створено`);
  } catch (err) {
    reply.send(`Помилка при cтворенні товару: ${err}`);
  }
};
