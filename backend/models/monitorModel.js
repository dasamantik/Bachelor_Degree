import { Schema, model as _model } from "mongoose";

const monitorSchema = new Schema({
  photo: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  screenSize: { type: Number, required: true },
  resolution: { type: String, required: true },
  refreshRate: { type: Number, required: true },
  price: { type: String, required: true },
});

const Monitor = _model("Monitor", monitorSchema);

export default Monitor;
