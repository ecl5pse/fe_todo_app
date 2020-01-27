import express from 'express';
import {User} from './db/models';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/user', async (req, res) => {
  try {

    console.log(1);
    const  createUser = await User.create(req.body);
    res.send(createUser);

  } catch (e) {

        next(e);
  }
});
app.use((err,req,res) =>{
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));