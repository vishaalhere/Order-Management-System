import React, { useContext } from "react";
import orderContext from "../context/orders/orderContext";

const OrderItems = (props) => {
  const { order } = props;
  const a = useContext(orderContext);
  const { deleteOrder } = useContext(orderContext);
  const invert = a.mode === "dark" ? "light" : "dark";

  const onClick = () => {
    deleteOrder(order._id);
  };
  return (
    <>
      <tbody>
        <tr>
          <td></td>
          <td>{order.customer_name}</td>
          <td>{order.mobile}</td>
          <td>{order.email}</td>
          <td>{order.address}</td>
          <td>{order.product_id}</td>
          <td>{order.product_name}</td>
          <td>{order.price}</td>
          <td>{order.delivery_date}</td>
          <td>{order.order_status}</td>
          <td>{order.source}</td>
          <td>{order.purchase_date}</td>
          <td>
            <i
              className={`fas fa-trash mx-2 text-${invert} `}
              onClick={onClick}></i>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default OrderItems;
