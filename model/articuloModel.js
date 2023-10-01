import { Schema, model } from "mongoose";

const articuloSchema =new Schema({
    monto:{
        type:String,
        required:true
    }, 
    precio:{
        type:String,
        required:true
    }, 
})
const articulo=model("articulos", articuloSchema)

export {articulo};