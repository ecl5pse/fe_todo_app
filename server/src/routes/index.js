import express from 'express';
import userRouter  from './user.router';
import AppError from '../utils/applicationErrors';
import checkUserAuthorization from '../middlewares/authorization/checkUserAuthorization';
import taskRouter             from './task.router.js';
import tasksRouter from './tasks.router';


const  router =  express.Router();

router.use(checkUserAuthorization);
router.use('/user', userRouter);
router.use( '/task', taskRouter );
router.use('/tasks',tasksRouter);

router.use('/*', function(req, res , next) {
  
  next( new  AppError.NotFoundError());

});

export  default  router;