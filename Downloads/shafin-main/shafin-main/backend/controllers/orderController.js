import Ordermodel from "../model/Order.js";
import productmodel from "../model/Product.js";


export const createorder = async (req, res, next) => {
  try {
    const {name, address,email,city,country,phone,pin} = req.body;

    const order = await Ordermodel.create({name,address,email,city,country,phone,pin});
    res.status(200).json({
      success: true,
      message: "Order created",
      order,
    });
  } catch (error) {
  
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error.message,
    });
  }
};

export const getsingleorder = async (req, res, next) => {
  const order = await ordermodel
    .findById(req.params.id)
    .populate("user", "name email");
  try {
  } catch (error) {}
  if (!order) {
    return res.status(401).json({
      success: false,
      message: "order not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "order found",
    order,
  });
};

export const myorder = async (req, res, next) => {
  const order = await Ordermodel.find({ user: req.user.id });
  res.status(200).json({
    success: true,
    message: "order found",
    order,
  });
};

//getallorder - for admin
export const orders = async (req, res, next) => {
  const order = await Ordermodel.find();

  var totalamount = 0;
  order.forEach((order) => {
    totalamount += order.totalprice;
  });
  res.status(200).json({
    success: true,
    message: "order found",
    totalamount,
    order,
  });
};

//updateorder-admin for order status - delivery-product stock

export const updateorder = async (req, res, next) => {
  try {
    const orderId = req.params.id; 
    const order = await Ordermodel.findById(orderId);

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    if (order.orderStatus === "delivered") {
      return res
        .status(400)
        .json({ success: false, message: "Order already delivered", order });
    }

    order.orderItems.forEach(async (orderItem) => {
      await updatestock(orderItem.product, orderItem.quantity);
    });

    order.orderStatus = req.body.orderStatus || order.orderStatus;
    order.deliverytimeAT = Date.now();
    await order.save();
    res.status(200).json({ success: true, order });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

async function updatestock(productid, quantity) {
  const product = await productmodel.findById(productid);
  product.stock = product.stock - quantity;
  product.save({ validateBeforeSave: false });
}


//delete order - admin

export const deleteorder = async (req, res, next) => {
  try {
    const orderId = req.params.id; 
    const order = await Ordermodel.findByIdAndDelete(orderId);
    res.status(200).json({ success: true, message:"order deleted succssfully",order });
  }
  catch(err){
console.log(err)
  }
}