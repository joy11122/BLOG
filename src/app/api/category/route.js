import { CategorySchema } from "@/app/model/CategoryModel"
import { NextResponse } from "next/server"

export async function GET(req){
     await mongoose.connect(connectionStr,{useNewUrlParser:true})
     const category=await CategorySchema.find()
     return NextResponse.json({success,category})




}