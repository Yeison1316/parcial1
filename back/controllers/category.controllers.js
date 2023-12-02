import { getCategory } from "../models/category.models.js";

export const getCategoryALL = async (req,res) => {
    try {
      let data = await getCategory();
      res.send({ success: true, msg: "HOLA GET CATEGORY", data: data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, msg: "Error al obtener las categorias" });
    }
  };