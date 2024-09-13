import express from "express"
import router from "./routes/routes";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});