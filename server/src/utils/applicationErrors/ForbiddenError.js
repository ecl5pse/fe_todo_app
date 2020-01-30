import ApplicationError  from './ApplicationError';

class ForbiddenError extends  ApplicationError{

  constructor(message) {
    super(message || 'The server understood the request, but is refusing to fulfill it',403);
  }

}

export  default ForbiddenError;