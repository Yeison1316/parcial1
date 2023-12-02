import { Router } from "express";
import { getCategoryALL } from "../controllers/category.controllers.js";

const router = Router();
router.use("/",getCategoryALL);

export default router;