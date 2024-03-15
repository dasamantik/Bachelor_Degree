import BaseRepository from "./repository.js";

import Token from "../models/tokenModel.js";
import User from "../models/userModel.js";

export default class UserRepository extends BaseRepository {
  constructor() {
    super(User);
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
  async deleteUser(id) {
    await Token.deleteMany({ user: id });
    return await User.findByIdAndDelete(id);
  }
}
