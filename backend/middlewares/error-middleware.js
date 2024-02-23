import AppiError from "../exceptions/appi-errors.js";

const errorHandlerMiddleware = (error, _, reply) => {
  if (error instanceof AppiError) {
    reply
      .code(error.status)
      .send({ message: error.message, errors: error.errors });
  }
  reply.status(500).send({ message: "Щось пішло не так" });
};

export default errorHandlerMiddleware;
