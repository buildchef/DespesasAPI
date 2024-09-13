import { GastosService } from "../service/gastosService";

export class GastosController{
    private gastosService = new GastosService();

    funcaoPraTeste() {
        return this.gastosService.funcaoPraTeste();
    };
};