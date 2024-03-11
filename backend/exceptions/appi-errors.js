export default class AppiError extends Error {
  status;
  errors;
  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new AppiError(401, "Користувач не авторизований");
  }

  static BadRequest(message, errors = []) {
    return new AppiError(400, message, errors);
  }
  static InvalidToken() {
    return new AppiError(403, "Токен не валідний");
  }
}
