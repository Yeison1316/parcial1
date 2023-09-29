import {Router} from "express";
import Producto from "./producto.routes.js";
import Auth from "./auth.route.js"

const router = Router();

router.use("/producto", Producto);
router.use("/auth", Auth);

 export default router;