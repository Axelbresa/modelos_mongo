import { Schema, model } from "mongoose";

const rolSchema =new Schema({
    rol_name:{
        type:String,
        required:true
    }, 
})
const rol=model("roles", rolSchema)

export {rol};