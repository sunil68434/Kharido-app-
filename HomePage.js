import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>मुख्य उत्पाद</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} width="150" />
            <h3>{product.name}</h3>
            <p>₹{product.price} <del>₹{product.mrp}</del></p>
            <Link to={`/product/${product.id}`}>डिटेल देखें</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomePage;