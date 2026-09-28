// Logic: Interacts with the data pool for items. Knows nothing about users or carts.

const db = require('../../shared/database');

class CatalogRepository {
  constructor() {
    // Seeding some mock product items into our shared database adapter
    db.products = [
      { id: 'p1', name: 'Mechanical Keyboard', price: 120.00, stock: 5 },
      { id: 'p2', name: 'Wireless Mouse', price: 60.00, stock: 0 }
    ];
  }

  async findById(productId) {
    return db.products.find(p => p.id === productId) || null;
  }

  async findAllAvailable() {
    // Only fetch items that are physically in stock
    return db.products.filter(p => p.stock > 0);
  }
}

module.exports = new CatalogRepository();
