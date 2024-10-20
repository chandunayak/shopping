import React from 'react';
import './ProductCard.css'
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <li className="product-items">
    <div className="product-card">
      <img src={product.image} alt={product.name}
       className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">Rs <span className="price-num">{product.price}</span>/-</p>
      <div className="buttons">
        <Link to="/thank-you" className="view-product-btn">View Product</Link>
        <button onClick={() => onAddToCart(product)} className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
    </li>
  );
};

export default ProductCard;
