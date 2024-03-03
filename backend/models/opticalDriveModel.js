import { Schema, model as _model } from "mongoose";

const opticalDriveSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, required: true },
  readSpeed: { type: Number },
  writeSpeed: { type: Number },
  price: { type: Number, required: true },
});

const OpticalDrive = _model("OpticalDrive", opticalDriveSchema);

export default OpticalDrive;
