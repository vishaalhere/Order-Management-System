import OrderContext from "./orderContext";
import { useState } from "react";

const OrderState = (props) => {
  // const host = "http://localhost:5000/";
  const host = "https://ordermanagewebsite.herokuapp.com/";
  const InitialOrders = [];
  const [mode, setMode] = useState("light");
  const [orders, setOrders] = useState(InitialOrders);

  //FETCH ALL ORDERS
  const getOrders = async () => {
    //API Calls
    const response = await fetch(`${host}api/orders/fetchallorders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setOrders(json);
  };

  //ADD A  NEW ORDER
  const addOrder = async (
    customer_name,
    mobile,
    email,
    address,
    product_id,
    product_name,
    price,
    order_status,
    source
  ) => {
    //API Calls
    const response = await fetch(`${host}api/orders/addorder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        customer_name,
        mobile,
        email,
        address,
        product_id,
        product_name,
        price,
        order_status,
        source
      })
    });
    const json = await response.json();
    console.log(json);
    // Logic to Add a ORDER
    let order = {
      _id: json.id,
      user: json.user,
      customer_name: customer_name,
      mobile: mobile,
      email: email,
      address: address,
      product_id: product_id,
      product_name: product_name,
      price: price,
      order_status: order_status,
      delivery_date: json.delivery_date,
      source: source,
      purchase_date: json.date,
      __v: 0,
    };

    setOrders(orders.concat(order));
  };

  //DELETE A ORDER
  const deleteOrder = async (id) => {
    //API Calls
    const response = await fetch(`${host}api/orders/deleteorder/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);

    //Logic to Delete a ORDER
    console.log("Deleting ORDER with id " + id);
    const newOrders = orders.filter((order) => {
      return order._id !== id;
    });
    setOrders(newOrders);
  };

  //DARK MODE
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <OrderContext.Provider
      value={{
        mode,
        toggleMode,
        orders,
        getOrders,
        addOrder,
        deleteOrder,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderState;
