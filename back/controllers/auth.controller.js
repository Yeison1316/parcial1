import jwt from "jsonwebtoken";
import { exports } from "../config/default.js";
import { getuser } from "./user.controller.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
    const data = await getuser(email,password);
    if (!data) {
        return res.status(401).json({ success: false, msg: 'Invalid credentials' });
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
}