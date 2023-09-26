import express from 'express';
import 'dotenv/config';
// Import Routes
import BookRoutes from './routes/books.routes.js';
import {db} from './config/database.config.js';

db.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello World! ${process.env.PORT}`);
});
app.use('/api/v1/books',BookRoutes);

app.listen(process.env.PORT, () =>
  console.log('Server app listening on port http://localhost:'+process.env.PORT),
);