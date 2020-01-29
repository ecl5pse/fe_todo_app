import {createUserSchema, updateUserSchema} from '../../utils/validation/user';

export default async function validateUser(req, res, next) {
  try {

    await (req.method.toUpperCase() === 'POST '
           ? createUserSchema
           : updateUserSchema).validateAsync(req.body);
    next();

  } catch (e) {
    next(e);
  }

}