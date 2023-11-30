import { getAuthUser } from "../models/user.models.js";

export async function getuser(req, res) {
    try {
      let  email = req.params.email;
      let password = req.params.password;
      let data = await getAuthUser(email,password);
      res.json({ success: true, data: data, msg: "Usuario authenticado" });
    } catch (error) {
      return console.error("Faltan credenciales")
    }
  }