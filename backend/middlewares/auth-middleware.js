import AppiError from '../exceptions/appi-errors.js';
import * as Token from '../service/token-service.js';
export default (req, _, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(AppiError.UnauthorizedError());
    }
    const accesToken = authorizationHeader.split(' ')[1];
    if (!accesToken) {
      return next(AppiError.UnauthorizedError());
    }
    const userData = Token.validateAccesToken(accesToken);
    if (!userData) {
      return next(AppiError.UnauthorizedError());
    }
    req.user = userData;
    next();
  } catch (err) {
    return next(AppiError.UnauthorizedError());
  }
};
