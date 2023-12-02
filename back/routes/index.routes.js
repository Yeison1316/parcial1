import {Router} from "express";
import Producto from "./producto.routes.js";
import Auth from "./auth.route.js"
import { getCategoryALL } from "../controllers/producto.controllers.js";

const router = Router();

router.use("/producto", Producto);
router.use("/auth", Auth);
router.use("/categories",getCategoryALL)

 export default router;