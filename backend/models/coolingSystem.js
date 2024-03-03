import { Schema, model as _model } from "mongoose";

const coolingSystemSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, required: true },
  fanSize: { type: Number },
  price: { type: Number, required: true },
});

const CoolingSystem = _model("CoolingSystem", coolingSystemSchema);

export default CoolingSystem;
