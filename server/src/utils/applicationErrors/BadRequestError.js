import ApplicationError from './ApplicationError';

class  BadRequestError extends ApplicationError {
  constructor(message) {
    super(message || 'The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.',400 );
  }
}

export  default  BadRequestError;