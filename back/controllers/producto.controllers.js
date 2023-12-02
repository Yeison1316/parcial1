import {
    getProductoUnicoModel,
    getProductoModel,
    postProductoModel,
    updateProductoModel,
    deleteProductoModel,
  } from "../models/producto.models.js";
  import { formatProductData } from "../config/formatting.js";
  import { getCategory } from "../models/category.models.js";

  export const getProductoAll = async (req, res) => {
    try {
      let data = await getProductoModel();
      const formattedData = formatProductData(data);
      res.send({ success: true, msg: "HOLA GET PRODUCTO", data: formattedData });
    } catch (error) {
      res.status(500).json({ success: false, msg: "Error al obtener productos" });
    }
  };
  
  export async function getProducto(req, res) {
    try {
      let  id_producto = req.params.id_producto;
      let data = await getProductoUnicoModel(id_producto);
      const formattedData = formatProductData(data);
      res.json({ success: true, data: formattedData, msg: "Obtener producto por ID" });
    } catch (error) {
      res.status(500).json({ success: false, msg: "Error al obtener el producto" });
    }
  }
  
  export async function postProducto(req, res) {
    try {
      let { nombre, valor } = req.body;
      let data = await postProductoModel(nombre, valor);
      res.json({ success: true, data: [], msg: data });
    } catch (error) {
      res.status(500).json({ success: false, msg: "Error al crear el producto" });
    }
  }
  
  export async function updateProducto(req, res) {
    try {
      const { id_producto } = req.params;
      let { nombre, valor } = req.body;
      let data = await updateProductoModel(id_producto, nombre, valor);
      res.json({ success: true, data: [], msg: data });
    } catch (error) {
      res.status(500).json({ success: false, msg: "Error al actualizar el producto" });
    }
  }
  
  export async function deleteProducto(req, res) {
    try {
      const { id_producto } = req.params;
      let data = await deleteProductoModel(id_producto);
      res.json({ success: true, data: [], msg: data });
    } catch (error) {
      res.status(500).json({ success: false, msg: "Error al eliminar el producto" });
    }
  }
  //Consulta para extraer las categorias 
  export const getCategoryALL = async (req, res) => {
    try {
      let data = await getCategory();
      res.send({ success: true, msg: "HOLA GET CATEGORY", data: data });
    } catch (error) {
      res.status(500).json({ success: false, msg: "Error al obtener las categorias" });
    }
  };
