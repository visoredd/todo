import React, { useState } from "react";
import "../App.css";

const Modal = ({ modalItem,handleSubmit,handleCancel }) => {
  const [data, setData] = useState(modalItem);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  
  return (
    <div className="modal-bg">
      <div className="modal">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data?.name}
          onChange={handleChange} />
          <input
          type="text"
          name="description"
          placeholder="Description"
          value={data?.description}
          onChange={handleChange} />
          <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={data?.quantity}
          onChange={handleChange} />
          <input
          type="number"
          name="price"
          placeholder="Price"
          value={data?.price}
          onChange={handleChange} />
          <button onClick={()=>handleSubmit(data)}>Submit</button>
          <button onClick={()=>handleCancel()}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
