import { Router } from "express";
import { getCategoryALL } from "../controllers/category.controller";

const router = Router();
router.use("/categories",getCategoryALL);

export default router;