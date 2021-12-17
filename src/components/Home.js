import React, { useContext, useState } from "react";
import orderContext from "../context/orders/orderContext";

const Home = () => {
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
    alert("Order Added Successfully!!");
  };

  const onChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value }); //to append order while writing it
  };
  return (
    <div
      style={{
        borderRadius: 5,
        padding: 20,
        boxShadow: "0px 5px 10px rgba(0,0,0,0.4)",
        width: "80%",
        margin: "auto",
        marginTop: 20,
      }}>
      <div>
        <h1 className={`text-${invert}`}>Add Your Order</h1>
        <div className="mb-3">
          <input
            type="text"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="customer_name"
            name="customer_name"
            onChange={onChange}
            placeholder="Enter name here"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="mobile"
            name="mobile"
            onChange={onChange}
            placeholder="Enter mobile number here"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="email"
            name="email"
            onChange={onChange}
            placeholder="Enter email here"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="source"
            name="source"
            onChange={onChange}
            placeholder="Enter source here"
          />
        </div>

        <div className="mb-3">
          <input
            type="order_status"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="order_status"
            name="order_status"
            onChange={onChange}
            placeholder="Enter order_status here"
          />
        </div>
        <div className="mb-3"></div>
        <div className="mb-3">
          <input
            type="number"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="price"
            name="price"
            onChange={onChange}
            placeholder="Enter Price here"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="product_name"
            name="product_name"
            onChange={onChange}
            placeholder="Enter product name here"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="product_id"
            name="product_id"
            onChange={onChange}
            placeholder="Enter product id here"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="address"
            name="address"
            onChange={onChange}
            placeholder="Enter address here"
          />
        </div>

        <button
          type="submit"
          className={`btn mt-3  btn-${invert} shadow-none`}
          onClick={handleClick}>
          Add Order
        </button>
      </div>
    </div>
  );
};

export default Home;
