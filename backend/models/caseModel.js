import { Schema, model as _model } from "mongoose";

const caseSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  formFactor: { type: String, required: true },
  dimensions: { type: String, required: true },
  driveBays: { type: Number, required: true },
  expansionSlots: { type: Number, required: true },
  ventilation: [
    {
      location: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  ledLighting: { type: Boolean, default: false },
  price: { type: Number, required: true },
});

const Case = _model("Case", caseSchema);

export default Case;
