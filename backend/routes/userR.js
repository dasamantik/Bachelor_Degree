import * as UserController from '../controllers/userController.js';
import authMiddleware from '../middlewares/auth-middleware.js';

async function routes(fastify) {
  fastify.post('/register', UserController.register);
  fastify.post('/login', UserController.login);
  fastify.post('/logout', UserController.logout);
  fastify.get('/activate/:link', UserController.activateAccount);
  fastify.get('/refresh', UserController.refreshToken);
  fastify.get('/Test', { preHandler: authMiddleware }, UserController.Test);
}
export default routes;
