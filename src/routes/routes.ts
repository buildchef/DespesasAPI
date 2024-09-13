import express, { Router } from "express";
import { GastosController } from "../controller/gastosController";

const router = Router();
const gastosController = new GastosController();

router.get("/teste", async (req: express.Request, res: express.Response) => {
    return res.json(gastosController.funcaoPraTeste()).status(200);
});

export default router;