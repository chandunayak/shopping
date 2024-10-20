import React from 'react';
import './AddToCartModal.css'
import Modal from 'react-modal';

const AddToCartModal = (props ) => {
  const {isOpen,product, onClose} = props

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="cart-modal">
      <div className="modal-card">
      <h2 className="modal-card-title">{product.name}</h2>
      <p className="modal-card-price">Rs. {product.price}/-</p>
      <button className="modal-card-button" onClick={onClose}>Confirm Add to Cart</button>
      </div>
    </Modal>
  );
};

export default AddToCartModal;
