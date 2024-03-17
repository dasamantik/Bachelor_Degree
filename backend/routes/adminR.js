import multer from 'multer';
import * as AdminController from '../controllers/adminController.js';
import * as authMiddleware from '../middlewares/auth-middleware.js';
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

async function routes(fastify) {
  fastify.get('/users', { preHandler: authMiddleware.VerifyAdmin }, AdminController.getUsers);
  fastify.delete('/users/delete/:id', { preHandler: authMiddleware.VerifyAdmin }, AdminController.deleteUser);

  fastify.post('/products/add', { preHandler: authMiddleware.VerifyAdmin }, AdminController.addProductToStock);
  fastify.delete(
    '/products/delete/:category/:id',
    { preHandler: authMiddleware.VerifyAdmin },
    AdminController.deleteProductFromStock
  );
  fastify.patch(
    '/products/update/:id',
    { preHandler: authMiddleware.VerifyAdmin },
    AdminController.updateProductFromStock
  );

  fastify.get('/products/getAll/:category', { preHandler: authMiddleware.VerifyAdmin }, AdminController.getAllProducts);
}
export default routes;
