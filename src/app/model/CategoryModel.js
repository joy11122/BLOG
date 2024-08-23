import { mongoose } from "mongoose";

const CategoryModel=new mongoose.Schema({
    name:String,
    slug:String,
})
export const CategorySchema=mongoose.models.category || mongoose.model("category",CategoryModel)