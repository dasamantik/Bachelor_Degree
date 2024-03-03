import { Schema, model as _model } from "mongoose";

const keyboardSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, required: true },
  connectivity: { type: String, required: true },
  backlight: { type: Boolean, default: false },
  price: { type: Number, required: true },
});

const Keyboard = _model("Keyboard", keyboardSchema);

export default Keyboard;
