import Joi from '@hapi/joi';


const  options = Joi.string().trim().min(1);

const limitSchema = options;
const  sortSchema = options;

export default Joi.object(
    {
      limit: limitSchema.label('limit').required(),

      sort: sortSchema.label('sort').required()

    },
);