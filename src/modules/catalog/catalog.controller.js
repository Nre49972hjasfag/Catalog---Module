// Logic: Exposes HTTP endpoints for users browsing the site.

const catalogService = require('./catalog.service');

class CatalogController {
  async listProducts(req, res) {
    try {
      const items = await catalogService.getStorefrontItems();
      return res.status(200).json({
        success: true,
        data: items
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Internal server error rendering catalog'
      });
    }
  }
}

module.exports = new CatalogController();
