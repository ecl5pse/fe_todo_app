import ApplicationError from './ApplicationError';

class NotFoundError extends ApplicationError {
  constructor(resource) {
    super(
        `${resource|| 'Resource'} not found`, 404);
  }

}

export default NotFoundError;