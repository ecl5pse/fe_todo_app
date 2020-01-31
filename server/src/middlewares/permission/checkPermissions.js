import AppError from '../../utils/applicationErrors';



/**
 *
 * @param {EntityType } action
 * @return {function(action:ActionType): function(...[*]=)}
 */
export  default  (action) =>{
  return (entity) =>{
    return (req , res, next) =>{
      try {


        next( new AppError.ForbiddenError())
      }catch (e) {
        next(e);
      }
    }
  }
}

