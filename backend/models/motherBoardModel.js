import { Schema, model as _model, mongoose } from "mongoose";

const motherboardSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  socket: { type: String, required: true },
  formFactor: { type: String, required: true },
  compatibleParts: {
    cpu: [{ type: mongoose.Schema.Types.ObjectId, ref: "CPU" }],
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
  maxMemory: { type: Number, required: true },
  price: { type: String, required: true },
});

const Motherboard = _model("Motherboard", motherboardSchema);

export default Motherboard;
