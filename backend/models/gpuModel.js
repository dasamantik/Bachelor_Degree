import { Schema, model as _model } from "mongoose";

const gpuSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  memory: { type: Number, required: true },
  memoryType: { type: String, required: true },
  coreClock: { type: Number, required: true },
  price: { type: Number, required: true },
});

const GPU = _model("GPU", gpuSchema);

export default GPU;
