import { Schema, model } from "mongoose";

const persmisoSchema =new Schema({
    permiso_name:{
        type:String,
        required:true
    }, 
})
const permisos=model("permisos", persmisoSchema)

export {permisos};