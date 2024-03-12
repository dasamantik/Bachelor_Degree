import model from "../DateTransferObj/modelsDTO.js";

const productRepo = {
  create: async (category, data) => {
    return await model[category].create(data);
  },
};

export default productRepo;
