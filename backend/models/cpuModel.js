import { Schema, model as _model } from "mongoose";

const cpuSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  socket: { type: String, required: true },
  cores: { type: Number, required: true },
  frequency: { type: Number, required: true },
  price: { type: Number, required: true },
});

const CPU = _model("CPU", cpuSchema);

export default CPU;
