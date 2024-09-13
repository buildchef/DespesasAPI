import { GastosService } from "../service/gastosService";

export class GastosController{
    private gastosService = new GastosService();

    async retornarTodosOsGastos() {
        return this.gastosService.retornarTodosOsGastos();
    };
};