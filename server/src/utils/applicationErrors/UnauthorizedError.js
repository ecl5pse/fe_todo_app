import ApplicationError from './ApplicationError';

class UnauthorizedError extends  ApplicationError{

  constructor(message) {
    super(message || 'The request requires user authentication' , 401);
  }

}
export  default  UnauthorizedError;