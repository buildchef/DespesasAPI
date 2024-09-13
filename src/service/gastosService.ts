import Gastos from "../model/gastosModel";

export class GastosService {
    async retornarTodosOsGastos() {
        const result = await Gastos.find();
        return result[0];
    };
};