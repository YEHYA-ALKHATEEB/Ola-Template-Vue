import Endpoint from "./Endpoint";

export default {
  findCategories() {
    return Endpoint().get(`products/categories`, {});
  },
  findProducts() {
    return Endpoint().get(`products`, {});
  },
  findFilteredProducts(payload) {
    return Endpoint().get(`products/category/` + payload.category, {});
  },
  deleteProduct(payload) {
    return Endpoint().delete(`products/6` + payload.id, {});
  },
  addProduct(payload) {
    return Endpoint().post(`products/`, payload);
  },
  userLogin(payload) {
    return Endpoint().post(`auth/login`, payload);
  },
};
