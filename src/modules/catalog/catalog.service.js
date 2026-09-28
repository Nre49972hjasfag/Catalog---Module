// Logic: Validates product business rules (e.g., verifying inventory levels).

const catalogRepository = require('./catalog.repository');

class CatalogService {
  async getStorefrontItems() {
    return await catalogRepository.findAllAvailable();
  }

  async verifyStock(productId) {
    const product = await catalogRepository.findById(productId);
    
    if (!product) {
      throw new Error('Product not found in system catalog');
    }

    if (product.stock <= 0) {
      throw new Error(`Product "${product.name}" is currently out of stock`);
    }

    return product;
  }
}

module.exports = new CatalogService();
