import express from 'express';
import userRouter  from './user';
import errorHandler from '../middlewares/errorHandler';


const  router =  express.Router();


router.use('/user', userRouter);
router.use(errorHandler);
export  default  router;