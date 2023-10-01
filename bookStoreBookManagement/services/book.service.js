import Books from '../models/books.model.js';

export async function getAllList(req,res){
    return await Books.findAll();
}

export async function getBookDetails(req,res){
    return await Books.findOne({
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
    return await Books.create({
        title,
        author,
        price
     });
}

export async function updateBookDetail(req,res){
    let { title,author,price} = req.body;
    if(!title||!author||!price){
        return {"error":true};
    }
    return await Books.update(
        {
            title: title,
            author: author,
            price: price
        },
        { where: {id: req.params.bookId}}
      )
      .then(function(rowsUpdated) {
        console.log(rowsUpdated);
       return  {success:true};
      }).catch(e => {
        return {"error":true};
     });
}

export async function bookDelete(req,res){   
     let book = await Books.findOne({where: {id: req.params.bookId}}).catch(e => {
        return {"error":true};
     })
     if (!book){
        return {"error":true};
     }
     book.destroy();
     return {"success":true};
}