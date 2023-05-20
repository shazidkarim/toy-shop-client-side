import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const AllToysRow = ({ doll }) => {
  const { doll_id, picture, name, category, price, available_quantity,description } = doll;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <tr>
      <th>
        <h1>{doll_id}</h1>
      </th>
      <td>
        <div className="flex items-center space-x-7">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <h1 className="font-bold">{name}</h1>
          </div>
        </div>
      </td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{available_quantity}</td>
      <td>
        <button className="btn btn-ghost p-6 m-auto" onClick={toggleModal}>
          details
        </button>
      </td>
      {showModal && (
        <Modal
          open={true}
          onClose={toggleModal}
          center
          classNames={{
            overlay: 'custom-overlay',
            modal: 'custom-modal',
            closeIcon: 'custom-closeIcon',
          }}
        >
          <div className="bg-white rounded-lg p-6 w-full md:w-96">
            <h2 className="text-lg font-bold mb-4">Details</h2>
            <img src={picture} alt="" />
            <p>Doll ID: {doll_id}</p>
            <p>Name: {name}</p>
            <p>Category: {category}</p>
            <p>Price: ${price}</p>
            <p>Available Quantity: {available_quantity}</p>
            <p>Decription : {description}</p>
            <button className="btn btn-primary mt-4" onClick={toggleModal}>
              Close
            </button>
          </div>
        </Modal>
      )}
    </tr>
  );
};

export default AllToysRow;
