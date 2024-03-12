import * as AdminController from "../controllers/adminController.js";
import * as authMiddleware from "../middlewares/auth-middleware.js";

async function routes(fastify) {
  fastify.get(
    "/users",
    { preHandler: authMiddleware.VerifyAdmin },
    AdminController.getUsers
  );
  fastify.delete(
    "/users/delete/:id",
    { preHandler: authMiddleware.VerifyAdmin },
    AdminController.deleteUser
  );
  fastify.post(
    "/products/add",
    { preHandler: authMiddleware.VerifyAdmin },
    AdminController.addProductToStock
  );
}
export default routes;
