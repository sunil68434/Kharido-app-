const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: 'टी-शर्ट', price: 299, mrp: 499, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'जैकेट', price: 499, mrp: 999, image: 'https://via.placeholder.com/150' },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  res.json(product);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));