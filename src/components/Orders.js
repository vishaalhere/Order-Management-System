import React, { useContext, useEffect } from "react";
import OrderItems from "./OrderItems";
import { useNavigate } from "react-router-dom";
import orderContext from "../context/orders/orderContext";

const Orders = () => {
  const a = useContext(orderContext);
  let navigate = useNavigate();
  const invert = a.mode === "dark" ? "light" : "dark";
  const { orders, getOrders } = useContext(orderContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getOrders();
    } else {
      navigate("/login");
      alert("Please Login First");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="row mt-3">
        <h2 className={`text-${invert}`}>Your Orders</h2>
        <hr />
        <table className={`table table-${a.toggleMode} text-${invert} sortable`}>
          <thead key="thead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Product ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Delivery Date</th>
              <th scope="col">Status</th>
              <th scope="col">Source</th>
              <th scope="col">Puchase date</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {orders.map((order) => {
            return <OrderItems key={order._id} order={order} />;
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
