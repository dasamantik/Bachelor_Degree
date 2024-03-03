const mongoose = require("mongoose");

const soundCardSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  interfaceType: { type: String, required: true },
  channels: { type: Number },
  price: { type: Number, required: true },
});

const SoundCard = mongoose.model("SoundCard", soundCardSchema);

module.exports = SoundCard;
