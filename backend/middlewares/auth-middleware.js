import AppiError from "../exceptions/appi-errors.js";
import * as Token from "../service/token-service.js";
export const VerifyUser = (request, reply, next) => {
  try {
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader) {
      return next(AppiError.UnauthorizedError());
    }
    const accesToken = authorizationHeader.split(" ")[1];
    if (!accesToken) {
      return next(AppiError.UnauthorizedError());
    }
    const userData = Token.validateAccesToken(accesToken);
    if (!userData) {
      return next(AppiError.UnauthorizedError());
    }
    next();
  } catch (err) {
    return next(AppiError.UnauthorizedError());
  }
};

export const VerifyAdmin = (request, _, next) => {
  try {
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader) {
      return next(AppiError.UnauthorizedError());
    }
    const accesToken = authorizationHeader.split(" ")[1];
    if (!accesToken) {
      return next(AppiError.UnauthorizedError());
    }
    const userData = Token.validateAccesToken(accesToken);
    if (!userData) {
      return next(AppiError.UnauthorizedError());
    }
    if (userData.role != "admin") {
      return next(AppiError.UnauthorizedError());
    }
    request.user = userData;
    next();
  } catch (err) {
    return next(AppiError.UnauthorizedError());
  }
};
