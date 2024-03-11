import User from "../models/userModel.js";
class UserRepository {
  async findByParam(Param) {
    return await User.findOne({ Param }, { _id: true });
  }

  async findById(id) {
    return await User.findById(id);
  }

  async create(email, passwordHash, phone, name, activationLink) {
    const user = {
      email,
      passwordHash,
      phone,
      name,
      activationLink,
    };
    return await User.create(user);
  }

  async update(id, data) {
    return await User.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await User.findByIdAndDelete(id);
  }
}

export default UserRepository;
