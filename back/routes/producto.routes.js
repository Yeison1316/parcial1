import {Router} from "express";
import {getProducto, postProducto, getProductoAll, updateProducto, deleteProducto, getCategoryALL} from "../controllers/producto.controllers.js"
import {validate} from "../middlewares/validator.middleware.js"
import { productoValidator } from "../validator/producto.validator.js";

const router = Router();

router.get("/", getProductoAll);
router.get("/:id_producto", getProducto);
router.post("/", validate(productoValidator), postProducto);
router.put("/:id_producto", validate(productoValidator), updateProducto);
router.delete("/:id_producto", deleteProducto);
router.get("/categories", getCategoryALL);
export default router;