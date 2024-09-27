import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../store/productSlice";

const ChangeProduct = ({ style, productId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({ name, description, price: parseFloat(price), available, id: productId }),
    );
    setName("");
    setDescription("");
    setPrice("");
    setAvailable(true);
  };

  return (
    <div className="form__change">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <label>
          Available:
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
        </label>
        <button type="submit">Change</button>
      </form>
    </div>

  );
};

export default ChangeProduct;
