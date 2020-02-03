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
const checkUserPermissions = checkPermissions(ENTITY.USER);

userRouter.post('/',
    checkUserPermissions(ACTION.CREATE),
    createValidateMW(schemas.userSchema)(ACTION.CREATE),
    createUser,
);
userRouter.patch('/:userId',
    checkUserPermissions(ACTION.UPDATE),
    createValidateMW(schemas.userSchema)(ACTION.UPDATE),
    updateUserByPk,
);

userRouter.get('/:userId',
    checkUserPermissions(ACTION.READ),
    getUserByPk);

userRouter.delete('/:userId',
    checkUserPermissions(ACTION.DELETE),
    deleteUserByPk);

export default userRouter;