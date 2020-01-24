import {User, Task} from './db/models';

async  function getTasksWithOwners(){
  try {

    const  task = await Task.findAll(
        {

          where:{
            isDone:true,
          },

          include:[
            {
              model:User,
              as:'owner',
            }
          ]
        }
    )
  }
  return  tas
  catch (e) {
    
  }
}





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
          as:'tasks'
        },
      ],
    });

    return result.map(item => item.get());

  } catch (e) {

  }

}

getUsersWithTasks().then(console.log);