import Order from '../models/order.model.js';
import axios from 'axios';
export async function getAllList(req,res){
    return await Order.findAll();
}
export async function getOrderDetails(req,res){
    return await Order.findOne({
        where: {
           id: req.params.orderId
        }
     });
}
export async function addOrder(req,res){
    let { customer_name,book_id} = req.body;
    if(!customer_name||!book_id){
        return {"error":true};
    }    
    
    return await axios.get(process.env.BOOK_MANAGEMENT_ENDPOINT+'/v1/books/'+book_id)
    .then(async function (response) {
        if(response?.data?.data){
            return await Order.create({
                customer_name,
                book_id,
            });           
        }else{
            return {error:"Book not found."};
        }
    })
    .catch(function (err) {
       return {error:"Something went wrong."};
    })
}
export async function orderDelete(req,res){   
     let order = await Order.findOne({where: {id: req.params.orderId}}).catch(e => {
        return {"error":true};
     })
     if (!order){
        return {"error":true};
     }
     order.destroy();
     return {"success":true};
}