import {createUserSchema, updateUserSchema} from  '../../utils/validation/user';

export default async function validateUser(req, res, next) {
  try {

    await (req.method.toUpperCase() === 'POST ')
    next(new Error());

  } catch (e) {
    next(e);
  }

}