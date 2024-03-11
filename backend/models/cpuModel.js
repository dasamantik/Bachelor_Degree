import { Schema, model as _model, mongoose } from "mongoose";

const cpuSchema = new Schema({
  photo: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  socket: { type: String, required: true },
  cores: { type: Number, required: true },
  frequency: { type: Number, required: true },
  compatibleParts: {
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
    networkInterfaceCard: [
      { type: mongoose.Schema.Types.ObjectId, ref: "NetworkInterfaceCard" },
    ],
  },
  price: { type: String, required: true },
});

const CPU = _model("CPU", cpuSchema);

export default CPU;
