import Case from "../models/caseModel.js";
import CoolingSystem from "../models/coolingSystem.js";
import CPU from "../models/cpuModel.js";
import GPU from "../models/gpuModel.js";
import Keyboard from "../models/keyboardModel.js";
import Monitor from "../models/monitorModel.js";
import MotherBoard from "../models/motherBoardModel.js";
import Mouse from "../models/mouseModel.js";
import NetworkCard from "../models/networkCardModel.js";
import OpticalDrive from "../models/opticalDriveModel.js";
import RAM from "../models/ramModel.js";
import SoundCard from "../models/soundCardModel.js";
import StorageModel from "../models/storageModel.js";

const models = {
  case: Case,
  cpu: CPU,
  gpu: GPU,
  keyboard: Keyboard,
  monitor: Monitor,
  motherboard: MotherBoard,
  ram: RAM,
  mouse: Mouse,
  networkcard: NetworkCard,
  opticaldrive: OpticalDrive,
  soundcard: SoundCard,
  storage: StorageModel,
  coolingSystem: CoolingSystem,
};

export default models;
