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
    alert("Order Added Successfully!!")
  };

  const onChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value }); //to append order while writing it
  };
  return (
    <div>
      <div
        className="container border border-grey rounded mt-4"
        // style={{marginTop:"6.5%"}}
      >
        <div className="m-2 p-2">
          <h1 className={`text-${invert}`}>Add Your Order</h1>
          <input
            type="text"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="customer_name"
            name="customer_name"
            onChange={onChange}
            placeholder="Enter name here"
          />
          <input
            type="number"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="mobile"
            name="mobile"
            onChange={onChange}
            placeholder="Enter mobile number here"
          />
          <input
            type="email"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="email"
            name="email"
            onChange={onChange}
            placeholder="Enter email here"
          />
          <input
            type="text"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="source"
            name="source"
            onChange={onChange}
            placeholder="Enter source here"
          />
          <input
            type="order_status"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="order_status"
            name="order_status"
            onChange={onChange}
            placeholder="Enter order_status here"
          />
          <input
            type="number"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="price"
            name="price"
            onChange={onChange}
            placeholder="Enter Price here"
          />
          <input
            type="text"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="product_name"
            name="product_name"
            onChange={onChange}
            placeholder="Enter product name here"
          />
          <input
            type="number"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="product_id"
            name="product_id"
            onChange={onChange}
            placeholder="Enter product id here"
          />
          <input
            type="text"
            className={`form-control shadow-none bg-${a.mode} text-${invert}`}
            id="address"
            name="address"
            onChange={onChange}
            placeholder="Enter address here"
          />

          <button
            type="submit"
            className={`btn mt-3  btn-${invert} shadow-none`}
            onClick={handleClick}
          >
            Add Order
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
