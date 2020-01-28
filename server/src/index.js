import express from 'express';
import router from './routes';

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(router);
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
