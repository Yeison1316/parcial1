import {checkSchema} from "express-validator";

export const productoValidator = checkSchema({
    nombre:{
        errorMessage : "NOMBRE REQUERIDO"
    }, 
    valor: {
        errorMessage : "VALOR REQUERIDO"
    }
} , [ "body"]);