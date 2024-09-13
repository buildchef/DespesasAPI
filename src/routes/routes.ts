import express, { Router } from "express";
import { GastosController } from "../controller/gastosController";

const router = Router();
const gastosController = new GastosController();

router.get("/retornarGastos", async (req: express.Request, res: express.Response) => {
    return res.json(await gastosController.retornarTodosOsGastos()).status(200);
});

export default router;