import mongoose, { Schema, Document } from "mongoose";

export interface IGastos extends Document{
    quantidade: number,
    data: string,
    tipo: string,
    classe: string
};

const GastosSchema = new Schema<IGastos>({
    quantidade: { type: Number, required: true },
    data: { type: String, required: true },
    tipo: { type: String, required: true },
    classe: { type: String, required: true }
});

const Gastos = mongoose.model<IGastos>("Gastos", GastosSchema, "gastos");

export default Gastos;