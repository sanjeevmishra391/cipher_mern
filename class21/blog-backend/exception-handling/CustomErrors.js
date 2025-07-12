class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;

    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = { BadRequestError, NotFoundError };