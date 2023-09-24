import express from 'express';
import 'dotenv/config';
// Import Routes
import BookRoutes from './routes/books.routes.js';
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello World! ${process.env.S3_BUCKET}`);
});
app.use('/api/v1/books',BookRoutes);

app.listen(3000, () =>
  console.log('Server app listening on port http://localhost:'.process.env.PORT),
);