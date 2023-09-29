import jwt from "jsonwebtoken";
import { exports } from "../config/default.js";

export const verifyToken = (req, res, next) => {
    let token = req.headers["authorization"];

    if(!token){
        return res.status(401).send({
            msg: "USUARIO NO AUTORIZADO"
        });
    }

    token = token.split(" ");

    if(token[0] !== "Bearer"){
        return res.status(401).send({
            msg: "USUARIO NO AUTORIZADO"
        })
    }

    jwt.verify(token[1], exports.secret, (err, decore)=> {
        if(err){
                return res.status(401).send({
                msg: "NO AUTORIZADO"
            })
        }
    next();
    })
}