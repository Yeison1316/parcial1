import { Router } from "express";
import { verifyToken } from "./token.middleware.js";
import cors from 'cors'

const router = Router();

app.use(cors({
    origin: 'https://angular-front-d2426.web.app', // Permitir solicitudes solo desde esta URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilitar el envío de cookies de autenticación
  }));
  

router.use("/producto", verifyToken);
export default router;