import React, { useContext, useState } from "react";
import orderContext from "../context/orders/orderContext";

const AddOrder = () => {
  const a = useContext(orderContext);
  const invert = a.mode === "dark" ? "light" : "dark";
  const { addOrder } = useContext(orderContext);

  const [order, setOrder] = useState([]);

  const handleClick = () => {
    addOrder(
      order.customer_name,
      order.mobile,
      order.email,
      order.address,
      order.product_id,
      order.product_name,
      order.price,
      order.order_status,
      order.source
    );
  };

  const onChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value }); //to append order while writing it
  };
  return (
    <div>
      <div
        className="container border border-grey rounded"
        // style={{marginTop:"6.5%"}}
      >
        <div className="m-2">
          <h1 className={`text-${invert}`}>Add Your Order</h1>
          <input
            type="text"
            className={`form-control my-2 shadow-none bg-${a.mode} text-${invert}`}
            id="customer_name"
            name="customer_name"
            required
            minLength={3}
            onChange={onChange}
            placeholder="Enter name here"
          />
          <input
            type="number"
            className={`form-control my-2 shadow-none bg-${a.mode} text-${invert}`}
            id="mobile"
            name="mobile"
            required
            minLength={3}
            onChange={onChange}
            placeholder="Enter mobile number here"
          />
          <input
            type="email"
            className={`form-control my-2 shadow-none bg-${a.mode} text-${invert}`}
            id="email"
            name="email"
            required
            minLength={3}
            onChange={onChange}
            placeholder="Enter email here"
          />
          <input
            type="text"
            className={`form-control my-2 shadow-none bg-${a.mode} text-${invert}`}
            id="source"
            name="source"
            required
            minLength={3}
            onChange={onChange}
            placeholder="Enter source here"
          />
          <input
            type="order_status"
            className={`form-control my-2 shadow-none bg-${a.mode} text-${invert}`}
            id="order_status"
            name="order_status"
            required
            minLength={3}
            onChange={onChange}
            placeholder="Enter order_status here"
          />
          <input
            type="number"
            className={`form-control my-2 shadow-none bg-${a.mode} text-${invert}`}
            id="price"
            name="price"
            required
            minLength={3}
            onChange={onChange}
            placeholder="Enter Price here"
          />
          <input
            type="text"
            className={`form-control my-2 shadow-none bg-${a.mode} text-${invert}`}
            id="product_name"
            name="product_name"
            required
            minLength={3}
            onChange={onChange}
            placeholder="Enter product name here"
          />
          <input
            type="text"
            className={`form-control shadow-none bg-${a.mode} text-${invert}  my-1 `}
            id="product_id"
            name="product_id"
            required
            minLength={3}
            onChange={onChange}
            placeholder="Enter product id here"
          />
          <input
            type="text"
            className={`form-control my-2 shadow-none bg-${a.mode} text-${invert}`}
            id="address"
            name="address"
            required
            minLength={3}
            onChange={onChange}
            placeholder="Enter address here"
          />

          <button
            type="submit"
            className={`btn mt-3  btn-${invert} shadow-none`}
            onClick={handleClick}>
            Add Order
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AddOrder;
