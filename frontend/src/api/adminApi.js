import $api from '../http';

export default class AdminApi {
  static async getAllProducts(category) {
    return $api.get(`/admin/products/getAll/${category}`);
  }
  static async deleteProduct(category, id) {
    return $api.delete(`/admin/products/delete/${category}/${id}`);
  }
}
