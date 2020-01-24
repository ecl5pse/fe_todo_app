import {User, Task} from './db/models';

async function getUsersWithTasks() {

  try {

    const result = User.findAll({
      limit: 10,
      attributes: {
        exclude: ['password'],
      },
      include: [
        {
          model: Task,
        },
      ],
    });

    return result.map(item => item.get());

  } catch (e) {

  }

}

getUsersWithTasks().then(console.log);