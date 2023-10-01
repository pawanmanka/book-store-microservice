import {db} from '../config/database.config.js';
const Books = db.define("books", {
    id: db.INTEGER,
    title: db.String,
    author: db.String,
    price: db.String,
});
db.sync();
export default Books;