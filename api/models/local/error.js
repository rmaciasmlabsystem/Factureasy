class CustomError extends Error {
  constructor(message, type, http_code, internal_code, rules) {
    super(message)
    Error.captureStackTrace(this, this.constructor);

    this.type = '';
    this.http_code = '';
    this.internal_code = '';
    this.rules = '';
  }
}

class InputValidationError extends Error {
  constructor(message, rules) {
    super(message)
    Error.captureStackTrace(this, this.constructor);

    this.type = 'request';
    this.http_code = 400;
    this.rules = rules;
  }
}

class DataValidationError extends Error {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, this.constructor);

    this.type = 'request';
    this.http_code = 409;
  }
}

class DataNotExistsError extends Error {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, this.constructor);

    this.type = 'request';
    this.http_code = 400;
  }
}

class UnAuthorizeError extends Error {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, this.constructor);

    this.type = 'request';
    this.http_code = 403;
  }
}

class InternalError extends Error {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, this.constructor);

    this.type = 'internal';
    this.http_code = 500;
  }
}

module.exports = {
  InputValidationError,
  DataValidationError,
  DataNotExistsError,
  UnAuthorizeError,
  InternalError,
  CustomError
}