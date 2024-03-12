import Token from "../models/tokenModel.js";
import User from "../models/userModel.js";
const UserRepository = {
  findByEmail: async (email) => {
    return await User.findOne({ email });
  },

  findById: async (id) => {
    return await User.findById(id);
  },

  create: async (email, passwordHash, phone, name, activationLink) => {
    const user = {
      email,
      passwordHash,
      phone,
      name,
      activationLink,
    };
    return await User.create(user);
  },

  update: async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (id) => {
    await Token.deleteMany({ user: id });
    return await User.findByIdAndDelete(id);
  },

  getAll: async () => {
    return await User.find();
  },
};

export default UserRepository;
