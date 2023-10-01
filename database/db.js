import {connect }from "mongoose"

export const conectarDB=async()=>{

    try{
      await connect ("mongodb://127.0.0.1:27017/mongoose_Model")
    }catch (error){
        console.log("error al conectar a db:" , error)
    }
}