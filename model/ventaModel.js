import { Schema, model } from "mongoose";

const ventaSchema =new Schema({
    usuario:{
        type:String,
        required:true
    }, 
    fecha_hora:{
        type:String,
        required:true 
    },
    articulo:{
        type:String,
        required:true 
    },
})
const venta=model("ventas", ventaSchema)

export {venta};