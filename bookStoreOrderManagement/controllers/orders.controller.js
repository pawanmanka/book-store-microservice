import { getAllList,getBookDetails,addBook,bookDelete } from '../services/orders.service.js';

export async function getAllBooks (req,res){
    let allBooks = await getAllList();
    res.status(200).json({success:true,data:allBooks});
    // getAllList().then(data => res.status(200).json({success:true,data:data}))
}
export async function getBookById (req,res){
    let book = await getBookDetails(req);
    res.status(200).json({success:true,data:book});
    // getAllList().then(data => res.status(200).json({success:true,data:data}))
}
export async function createBook (req,res){
    let book = await addBook(req);
    if(book.error){
        res.status(400).json({msg:"Something went wrong."});
    }
    res.status(200).json({success:true,data:book});
}
export async function updateBook (req,res){
    let book = await updateBookDetail(req);
    if(book.error){
        res.status(400).json({msg:"Something went wrong."});
    }
    res.status(200).json({success:true,data:book});
}

export async function removeBook (req,res){
    let book = await bookDelete(req);
    if(book.error){
        res.status(400).json({msg:"Something went wrong."});
    }
    res.status(200).json({success:true,data:book});
}