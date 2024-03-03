import { Schema, model as _model, mongoose } from "mongoose";

const ramSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  capacity: { type: Number, required: true },
  speed: { type: Number, required: true },
  compatibleParts: {
    cpu: [{ type: mongoose.Schema.Types.ObjectId, ref: "CPU" }],
    motherboard: [{ type: mongoose.Schema.Types.ObjectId, ref: "Motherboard" }],
    gpu: [{ type: mongoose.Schema.Types.ObjectId, ref: "GPU" }],
    storage: [{ type: mongoose.Schema.Types.ObjectId, ref: "Storage" }],
    coolingSystem: [
      { type: mongoose.Schema.Types.ObjectId, ref: "CoolingSystem" },
    ],
    opticalDrive: [
      { type: mongoose.Schema.Types.ObjectId, ref: "OpticalDrive" },
    ],
    soundCard: [{ type: mongoose.Schema.Types.ObjectId, ref: "SoundCard" }],
    networkInterfaceCard: [
      { type: mongoose.Schema.Types.ObjectId, ref: "NetworkInterfaceCard" },
    ],
  },
  price: { type: String, required: true },
});

const RAM = _model("RAM", ramSchema);

export default RAM;
