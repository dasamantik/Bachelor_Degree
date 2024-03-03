import { Schema, model as _model, mongoose } from "mongoose";

const coolingSystemSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, required: true },
  fanSize: { type: Number },
  compatibleParts: {
    cpu: [{ type: mongoose.Schema.Types.ObjectId, ref: "CPU" }],
    motherboard: [{ type: mongoose.Schema.Types.ObjectId, ref: "Motherboard" }],
    gpu: [{ type: mongoose.Schema.Types.ObjectId, ref: "GPU" }],
    ram: [{ type: mongoose.Schema.Types.ObjectId, ref: "RAM" }],
    storage: [{ type: mongoose.Schema.Types.ObjectId, ref: "Storage" }],
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

const CoolingSystem = _model("CoolingSystem", coolingSystemSchema);

export default CoolingSystem;
