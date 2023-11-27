import jwt from "jsonwebtoken";
import { exports } from "../config/default.js";

export const login = (req, res) => {
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            username: "admin"
        }
    }, exports.secret);

    res.status(200).json({
        token: token,
        success: true,
        data: [],
        msg: "Logeado EXITOSAMENTE"
    })
}