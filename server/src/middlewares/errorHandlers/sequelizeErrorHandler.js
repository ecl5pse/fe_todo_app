import  {BaseError} from 'sequelize';

export  default  function (err, req , res , next) {

  if ( err instanceof  BaseError){

    return res.status(400).send(err);
  }else {
    next(err);
  }

}