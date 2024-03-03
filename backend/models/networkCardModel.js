import { Schema, model as _model, mongoose } from "mongoose";

const networkInterfaceCardSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  interfaceType: { type: String, required: true },
  maxSpeed: { type: Number },
  compatibleParts: {
    cpu: [{ type: mongoose.Schema.Types.ObjectId, ref: "CPU" }],
    motherboard: [{ type: mongoose.Schema.Types.ObjectId, ref: "Motherboard" }],
    gpu: [{ type: mongoose.Schema.Types.ObjectId, ref: "GPU" }],
    ram: [{ type: mongoose.Schema.Types.ObjectId, ref: "RAM" }],
    storage: [{ type: mongoose.Schema.Types.ObjectId, ref: "Storage" }],
    coolingSystem: [
      { type: mongoose.Schema.Types.ObjectId, ref: "CoolingSystem" },
    ],
    opticalDrive: [
      { type: mongoose.Schema.Types.ObjectId, ref: "OpticalDrive" },
    ],
    soundCard: [{ type: mongoose.Schema.Types.ObjectId, ref: "SoundCard" }],
  },
  price: { type: String, required: true },
});

const NetworkInterfaceCard = _model(
  "NetworkInterfaceCard",
  networkInterfaceCardSchema
);

export default NetworkInterfaceCard;
