import express from "express"
import router from "./routes/routes";
import { environment } from "./environment";
import { BancoDeDaDos } from "./config/bancoDeDados";

const app = express();

app.use(express.json());

app.use("/despesas", router);

app.listen(environment.app.port, async () => {
    console.log(`Servidor rodando em http://localhost:${environment.app.port}`);
    await BancoDeDaDos.conectar();
});