import { Schema, model as _model } from "mongoose";

const mouseSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, required: true },
  dpi: { type: Number, required: true },
  buttons: { type: Number, required: true },
  price: { type: String, required: true },
});

const Mouse = _model("Mouse", mouseSchema);

export default Mouse;
