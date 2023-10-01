import {sequelize} from '../utils/database.utils.js';
import{ DataTypes } from "sequelize";
const Orders = sequelize.define("orders", {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    customer_name:  {
        type: DataTypes.STRING,
    },
    book_id:  {
        type: DataTypes.BIGINT,
    },
    status:  {
        type: DataTypes.ENUM({
            values: ['New', 'Processing', 'Completed', 'Cancelled']
          }),
    },
});
export default Orders;