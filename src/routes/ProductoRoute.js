import express from "express";
import {obtenerProductos, insertProductos, obtenerOneProducto, actualizarProducto, borrarProducto} from "../controllers/ProductoController.js";

const router = express.Router();

router.get("/all", obtenerProductos);
router.post("/", insertProductos);
router.get("/:busqueda", obtenerOneProducto);
router.put("/:id", actualizarProducto)
router.delete("/:id", borrarProducto)

export default router;