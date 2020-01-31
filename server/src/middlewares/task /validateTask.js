import taskSchema from '../../utils/validation/task';

function createTaskValidateMW( isCreateMode= true) {

  return async (req, res, next) => {
    try {

      req.body = await taskSchema.validateAsync(req.body, {

        context: {
          isCreateMode,
        },
      });

      next();

    } catch (e) {

      next(e);
    }

  };
}

export  const  validateTaskOnCreate = createTaskValidateMW();
export  const  validateTaskOnUpdate = createTaskValidateMW(false);