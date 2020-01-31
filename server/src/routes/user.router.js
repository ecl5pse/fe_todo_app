import express from 'express';
import { createUser ,deleteUserByPk, getUserByPk, updateUserByPk } from '../controllers/user.controller.js';
import schemas                                                     from '../utils/validation';
import createValidateMW from '../middlewares/validation/createValidationMW';

const userRouter = express.Router();

userRouter.post( '/',
    createValidateMW( schemas.userSchema )(),
    createUser
);
userRouter.patch( '/:userId',
    createValidateMW( schemas.userSchema )( false ),
    updateUserByPk
);

userRouter.get('/:userId', getUserByPk);
userRouter.delete('/:userId', deleteUserByPk);
export default userRouter;