
import productModel from '../model/Product.js';
import apiFeature from '../utils/apiFeatures.js';

import Product from '../model/Product.js';
export const newProduct = async (req, res) => {
    try {
      const { name, price, color, cutprice, describe, stock, category, seller, rating, size } = req.body;
    const images = req.body.images;
  
      const product = new Product({
        name,
        price,
        color,
        cutprice,
        describe,
        stock,
        category,
        seller,
        rating,
        size,
        images,
      });
  
      await product.save();
      res.status(201).json({
        success: true,
        product
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Server Error'
      });
    }
  };
  


export const getproducts=async(req,res,next)=>{
    const resultperpage=100
 const apiFeatures = new apiFeature(productModel.find(),req.query).search().filter().paginate(resultperpage)
    const product= await apiFeatures.query
res.status(200).json({
    success :true,
    message:"success get all products",
   count:product.length,
   product
})
}


export const singleproduct = async (req, res, next) => {
    try {
        const product = await productModel.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Product found',
            product: product
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};

export const updateproduct=async(req,res,next)=>{
    let product=await productModel.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runvalidator:true

    })
    if(!product){
       return  res.status(404).json({
            success:true,
            message:"product not found"
        })
    }
    res.status(200).json({
        success:true,
        message:"product updated ",
        product
    })

}

export const singleproductupdate=async(req,res)=>{
    let product=await productModel.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runvalidator:true
    
        })
        if(!product){
           return  res.status(404).json({
                success:true,
                message:"product not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"product updated ",
            product
        })
}

export const deleteproduct=async(req,res,next)=>{


    let product = await productModel.findByIdAndDelete(req.params.id)

    if(!product){
       return res.status(404).json({
            success:false,
            message:"product not find"
        })
    }
    res.status(200).json({
        success:true,
        message:"product deleted success",
        product
    })

}


