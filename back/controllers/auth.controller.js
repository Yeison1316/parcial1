import jwt from "jsonwebtoken";
import { exports } from "../config/default.js";
import { getAuthUser } from "../models/user.models.js";

export const login = async (req, res) => {
    try {
        const { email , password } = req.query; 
        let data = await getAuthUser(email , password );
        if(!data){
            throw new Error("Credenciales no válidas");
        }
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: {
                username: "admin",
                role: "role_admin"
            }
        }, exports.secret);
    
        res.status(200).json({
            token: token,
            success: true,
            data: [],
            msg: "Logeado EXITOSAMENTE"
        })

    } catch (e) {
        res.status(401).json({
            success: false, 
            data: "Servicio no disponible" , 
            msg : "Servicio no disponible"
        });  
    }
    
}