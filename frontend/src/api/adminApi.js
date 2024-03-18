import $api from '../http';

export default class AdminApi {
  static async getAllProducts(category) {
    return $api.get(`/admin/products/getAll/${category}`);
  }
}
