import {sequelize} from '../utils/database.utils.js';
import{ DataTypes } from "sequelize";
const Books = sequelize.define("books", {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title:  {
        type: DataTypes.STRING,
    },
    author:  {
        type: DataTypes.STRING,
    },
    price:  {
        type: DataTypes.DOUBLE,
    },
});
export default Books;