import { Schema, model as _model } from "mongoose";

const networkInterfaceCardSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  interfaceType: { type: String, required: true },
  maxSpeed: { type: Number },
  price: { type: Number, required: true },
});

const NetworkInterfaceCard = _model(
  "NetworkInterfaceCard",
  networkInterfaceCardSchema
);

export default NetworkInterfaceCard;
