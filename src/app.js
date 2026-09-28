const express = require('express');
const authController = require('./modules/authentication/auth.controller');
const catalogController = require('./modules/catalog/catalog.controller'); // New import

const app = express();
app.use(express.json());

// --- Authentication Routes ---
app.post('/api/auth/register', (req, res) => authController.handleRegister(req, res));

// --- Catalog Routes ---
app.get('/api/products', (req, res) => catalogController.listProducts(req, res)); // New endpoint

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
