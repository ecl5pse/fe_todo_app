import AppError from '../../utils/applicationErrors';

/**
 *
 * @param entity
 * @return {function(*): function(...[*]=)}
 */
export default function(entity) {

 return  function(action) {

    return function(req,res,next) {
      try {


        next(new AppError.ForbiddenError());
      }catch (e) {
        next(e);
      }

    };
 };
}
