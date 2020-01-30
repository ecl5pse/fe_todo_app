import  JoiBase from "@hapi/joi";
import JoiDate from "@hapi/joi-date";


const Joi = JoiBase.extend(JoiDate);

const isDoneSchema = Joi.boolean.strict().validate('true');
const valueSchema = Joi.string().max(255);
const deadlineSchema = Joi.date().format('YYYY-MM-DD').utc();

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
