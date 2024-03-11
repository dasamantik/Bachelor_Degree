import * as AdminService from "../service/admin-service.js";

export const getUsers = async (request, reply) => {
  try {
    const users = await AdminService.getAllUsers();
    reply.send(users);
  } catch (err) {
    reply.send(err);
  }
};
