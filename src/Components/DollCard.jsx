/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactModal from "react-modal";
import './DollCard.css'



const DollCard = ({ doll }) => {
  const { picture, name, price, rating, category } = doll;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 h-full">
        <img src={picture} alt="Doll" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        <p>Category: {category}</p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={handleOpenModal}>
            View details
          </button>
        </div>
      </div>
      <div className="modall">
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}>
        <div className="modal-content">
          <img src={picture} alt={name} />
          <h3>{name}</h3>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <p>Category: {category}</p>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      </ReactModal>
      </div>
    </div>
  );
};

export default DollCard;
