import express from 'express';
import taskController  from './../controllers/task.controller';
import  schemas from '../utils/validation';
import createQueryOptions from '../middlewares/query/createQueryMW';



const tasksRouter = express.Router();

tasksRouter.get ('/',
                  createQueryOptions(schemas)(),
                   taskController.getTasks,
);


export  default  tasksRouter;