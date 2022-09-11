import http from "./http-common";

class CommerceService {
  getAllProducts() {
    return http.get('/products')
    .then(response => {
      return response.data;
    });
  }

  createProduct(product) {
    return http
      .put('/products', product)
      .then(response => {
        return response.data;
      });
  }
}
export default new CommerceService();