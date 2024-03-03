import { Schema, model as _model } from "mongoose";

const motherboardSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  socket: { type: String, required: true },
  formFactor: { type: String, required: true },
  maxMemory: { type: Number, required: true },
  price: { type: String, required: true },
});

const Motherboard = _model("Motherboard", motherboardSchema);

export default Motherboard;
