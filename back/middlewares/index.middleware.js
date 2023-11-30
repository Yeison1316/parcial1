import { Router } from "express";
import { verifyToken } from "./token.middleware.js";
import cors from 'cors'
import express from "express";

const app = express();
const router = Router();

app.use(cors({
    origin: '*', // Permitir solicitudes solo desde esta URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilitar el envío de cookies de autenticación
  }));
  

router.use("/producto", verifyToken);
export default router;