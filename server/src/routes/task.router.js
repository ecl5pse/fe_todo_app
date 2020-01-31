import express             from 'express';
import createValidationMW  from '../middlewares/validation/createValidationMW.js';
import schemas             from '../utils/validation';
import * as TaskController from '../controllers/task.controller.js';
import checkPermissions from '../middlewares/permission/checkPermissions';
import {ACTION, ENTITY} from '../constants';

const taskRouter = express.Router();

const  checkTaskPermissions = checkPermissions(ENTITY.TASK);


taskRouter.post('/',
    checkPermissions(ACTION.CREATE),
    createValidationMW(schemas.taskSchema)(),
    TaskController.createTask,
);
taskRouter.get('/:taskId',
    checkPermissions(ACTION.READ),
    TaskController.getTask,
);
taskRouter.patch('/:taskId',
    checkPermissions(ACTION.UPDATE),
    createValidationMW(schemas.taskSchema)(false),
    TaskController.updateTask,
);
taskRouter.delete('/:taskId',
    checkPermissions(ACTION.DELETE),
    TaskController.deleteTask,
);

export default taskRouter;