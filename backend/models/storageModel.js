import { Schema, model as _model } from "mongoose";

const storageSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, required: true },
  capacity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Storage = _model("Storage", storageSchema);

export default Storage;
