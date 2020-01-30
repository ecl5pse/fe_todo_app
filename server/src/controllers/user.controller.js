import {User} from './../db/models';

export async function createUser(req, res, next) {

  try {

    const createdUser = await User.create(req.body);

    if (createdUser) {
      const userData = createdUser.get();
      delete userData.password;
      return res.status(201).send(userData);

    }

    next(new Error());

  } catch (e) {

    next(e);
  }
}

export async function updateUserByPk(req, res, next) {

  try {

    const [updatedRowsCount, updatedRows] = await User.update(req.body, {
      where: {
        id: req.params.userId,
      },

      returning: true,
    });

    if (updatedRowsCount) {

      const data = updatedRows[0].get();
      delete data.password;
      return res.send(data);

    }
    next('Resource not found!');
  } catch (e) {

    next(e);
  }

}

export async function getUserByPk(req, res, next) {
  try {

    const foundUser = await User.findByPk(req.params.userId);

    if (foundUser) {

      return res.send(foundUser);
    }

    next('Resource not found');
  } catch (e) {
    next(e);
  }

}

export async function deleteUserByPk(req, res, next) {
  try {

    const deleteRowsCount = await User.destroy({
                                                 where: {
                                                   id: req.params.userId,
                                                 },
                                               });

    if (deleteRowsCount) {
      res.send(`${deleteRowsCount}`);
    }
    next( 'Resource not found!' );

  } catch (e) {
    next(e);
  }

}