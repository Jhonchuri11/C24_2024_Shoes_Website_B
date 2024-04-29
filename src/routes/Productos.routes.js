import { Router } from "express";
import { methods as productosController } from "../controllers/Productos.controller";

const router = Router();

router.get("/", productosController.getProductos);

export default router;