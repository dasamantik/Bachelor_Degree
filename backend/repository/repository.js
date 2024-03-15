class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async findBy(options = {}) {
    return await this.model.findOne(options);
  }

  async findById(id) {
    return await this.model.findById(id);
  }

  async update(id, body) {
    return await this.model.update(body, { where: { id }, returning: true });
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }

  async getAll(options = {}) {
    return await this.model.findAll(options);
  }
}

export default BaseRepository;
