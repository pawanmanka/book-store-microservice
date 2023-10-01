import express from 'express';
import {getAllBooks,getBookById,createBook,updateBook,removeBook} from '../controllers/book.controller.js';
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
router.get('/',getAllBooks)
router.get('/:bookId',getBookById);
router.post('/',createBook);
router.put('/:bookId',updateBook);
router.delete('/:bookId',removeBook);

export default router;