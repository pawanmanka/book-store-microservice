import express from 'express';
import 'dotenv/config';
// Import Routes
import BookRoutes from './routes/books.routes.js';
import {db} from './config/database.config.js';
import Books from './models/books.model.js';

const app = express();
const BooksRes = await Books.findAll();
console.log(BooksRes);
app.get('/', (req, res) => {
  res.send(`Hello World! ${process.env.PORT}`);
});
app.use('/api/v1/books',BookRoutes);

app.listen(process.env.PORT, () =>
  console.log('Server app listening on port http://localhost:'+process.env.PORT),
);