import {Router} from "express";
import Producto from "./producto.routes.js";
import Auth from "./auth.route.js"
import Category from "./category.routes.js"

const router = Router();

router.use("/producto", Producto);
router.use("/auth", Auth);
router.use("/categories",Category)


 export default router;