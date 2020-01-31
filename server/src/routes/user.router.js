import express from 'express';
import {
  createUser,
  deleteUserByPk,
  getUserByPk,
  updateUserByPk,
} from '../controllers/user.controller.js';

import schemas from '../utils/validation';
import createValidateMW from '../middlewares/validation/createValidationMW';
import checkPermissions from '../middlewares/permission/checkPermissions';
import {ACTION, ENTITY} from '../constants';

const userRouter = express.Router();
const checkUSerPermissions = checkPermissions(ENTITY.USER);

userRouter.post('/',
    checkUSerPermissions(ACTION.CREATE),
    createValidateMW(schemas.userSchema)(),
    createUser,
);
userRouter.patch('/:userId',
    checkUSerPermissions(ACTION.UPDATE),
    createValidateMW(schemas.userSchema)(false),
    updateUserByPk,
);

userRouter.get('/:userId',
    checkUSerPermissions(ACTION.READ),
    getUserByPk);

userRouter.delete('/:userId',
    checkUSerPermissions(ACTION.DELETE),
    deleteUserByPk);

export default userRouter;