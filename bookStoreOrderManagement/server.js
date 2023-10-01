import express from 'express';
import 'dotenv/config';
import bodyParser from "body-parser";
// Import Routes
import OrderRoutes from './routes/orders.routes.js';
import {sequelize } from './utils/database.utils.js';
const app = express();
// body parser for post request 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

sequelize .authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
app.get('/', (req, res) => {
  res.send(`Order Store : Order Management Service Working On : ${process.env.PORT}`);
});
app.use('/api/v1/orders',OrderRoutes);

app.listen(process.env.PORT, () =>
  console.log('Server app listening on port http://localhost:'+process.env.PORT),
);