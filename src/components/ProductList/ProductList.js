import React, { useState } from 'react';
import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'
import AddToCartModal from '../AddToCartModal/AddToCartModal'

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
      {isModalOpen && (
        <AddToCartModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};

export default ProductList;
