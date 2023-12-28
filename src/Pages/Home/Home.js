import React, { useEffect, useState } from 'react'

import './Home.css'

const ProductCard = ({ product }) => (
  <div className="card">
    <img src={product.image} alt={product.title} />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
    </div>
  </div>
);

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home