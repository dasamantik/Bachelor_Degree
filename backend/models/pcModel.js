import mongoose from "mongoose";
const pcBuildSchema = new mongoose.Schema({
  cpu: { type: mongoose.Schema.Types.ObjectId, ref: "CPU", required: true },
  motherboard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Motherboard",
    required: true,
  },
  gpu: { type: mongoose.Schema.Types.ObjectId, ref: "GPU", required: true },
  ram: { type: mongoose.Schema.Types.ObjectId, ref: "RAM", required: true },
  storage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Storage",
    required: true,
  },
  case: { type: mongoose.Schema.Types.ObjectId, ref: "Case", required: true },
  keyboard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Keyboard",
    required: true,
  },
  monitor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Monitor",
    required: true,
  },
  mouse: { type: mongoose.Schema.Types.ObjectId, ref: "Mouse", required: true },
  coolingSystem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoolingSystem",
    required: false,
  },
  opticalDrive: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OpticalDrive",
    required: false,
  },
  soundCard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SoundCard",
    required: false,
  },
  networkInterfaceCard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NetworkInterfaceCard",
    required: false,
  },
  totalPrice: { type: Number, required: true },
});

export default mongoose.model("PcBuild", pcBuildSchema);
