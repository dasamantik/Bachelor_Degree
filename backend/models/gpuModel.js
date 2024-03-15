import { Schema, model as _model, mongoose } from "mongoose";

const gpuSchema = new Schema({
  photo: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  memory: { type: Number, required: true },
  memoryType: { type: String, required: true },
  coreClock: { type: Number, required: true },
  compatibleParts: {
    cpu: [{ type: mongoose.Schema.Types.ObjectId, ref: "CPU" }],
    motherboard: [{ type: mongoose.Schema.Types.ObjectId, ref: "Motherboard" }],
    ram: [{ type: mongoose.Schema.Types.ObjectId, ref: "RAM" }],
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

const GPU = _model("GPU", gpuSchema);

export default GPU;
