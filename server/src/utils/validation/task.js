import Joi from '@hapi/joi';


const isDoneSchema = Joi.boolean().optional();
const valueSchema = Joi.string().trim().min(1).max(255);
const deadlineSchema = Joi.date().greater('now');

export default Joi.object({

  isDone: isDoneSchema.label('is done').when('$isCreateMode', {
    then: isDoneSchema.required(),
  }),
  value: valueSchema.label('Value').when('$isCreateMode', {
    then: valueSchema.required(),
  }),
  deadline: deadlineSchema.label('Deadline').when('$isCreateMode', {
    then: deadlineSchema.required(),
  }),

});
