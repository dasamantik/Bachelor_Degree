import { Schema, model as _model } from "mongoose";

const ramSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  capacity: { type: Number, required: true },
  speed: { type: Number, required: true },
  price: { type: Number, required: true },
});

const RAM = _model("RAM", ramSchema);

export default RAM;
