import mongoose from "mongoose";

const productSchema =mongoose.Schema(
    {
        name:String,
        description:String,
        price:Number,
        imageUrl:{
            type:String,
        }
    },
    {tiimestamps:true}
);

export default mongoose.model("Product",productSchema);