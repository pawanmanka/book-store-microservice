import { getAllList,getOrderDetails,addOrder,orderDelete } from '../services/orders.service.js';
export async function getAllOrders (req,res){
    let allOrders = await getAllList();
    res.status(200).json({success:true,data:allOrders});
}
export async function getOrderById (req,res){
    let Order = await getOrderDetails(req);
    res.status(200).json({success:true,data:Order});
}
export async function createOrder (req,res){
    let Order = await addOrder(req);
    if(Order.error){
        res.status(400).json({msg:Order.error});
    }
    res.status(200).json({success:true,data:Order});
}

export async function removeOrder (req,res){
    let Order = await orderDelete(req);
    if(Order.error){
        res.status(400).json({msg:"Something went wrong."});
    }
    res.status(200).json({success:true,data:Order});
}