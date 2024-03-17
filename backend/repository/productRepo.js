import model from '../DateTransferObj/modelsDTO.js';

const productRepo = {
  create: async (category, data) => {
    return await model[category].create(data);
  },
  remove: async (category, id) => {
    return await model[category].findByIdAndDelete(id);
  },
  update: async (category, id, data) => {
    return await model[category].findByIdAndUpdate(id, data, { new: true });
  },
  getAll: async (category) => {
    return await model[category].find();
  },
};

export default productRepo;
