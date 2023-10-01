import Order from '../models/order.model.js';

export async function getAllList(req,res){
    return await Order.findAll();
}

export async function getBookDetails(req,res){
    return await Order.findOne({
        where: {
           id: req.params.bookId
        }
     });
}

export async function addBook(req,res){
    let { title,author,price} = req.body;
    if(!title||!author||!price){
        return {"error":true};
    }
    return await Order.create({
        title,
        author,
        price
     });
}


export async function bookDelete(req,res){   
     let book = await Order.findOne({where: {id: req.params.bookId}}).catch(e => {
        return {"error":true};
     })
     if (!book){
        return {"error":true};
     }
     book.destroy();
     return {"success":true};
}