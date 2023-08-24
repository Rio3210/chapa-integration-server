import Product from "../models/productModel.js";

export const createProduct =async (req,res)=>{
    try {
        const {name,price,description,imageUrl}=req.body;
        return await Product.create({name,price,description,imageUrl});
    } catch (error) {
        return res.status(500).json({
            errorMsg:error,
        })
    }
};

export const getProducts=async (req,res)=>{
    try {
        const products=await Product.find({});
        return res.status(200).json({products})
        
    }catch(error){
        res.status.json({
            errorMsg:error,
        })
    }
};