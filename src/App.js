import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import OrderState from "./context/orders/OrderState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Orders from "./components/Orders";

const App = () => {
  const title = "Order Admin System";
  const about = "Orders";
  return (
    <OrderState>
      <Router>
        <Navbar title={title} about={about} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home key="home" />}></Route>
            <Route
              exact
              path="/orders"
              element={<Orders key="orders" />}></Route>
            <Route exact path="/login" element={<Login key="login" />}></Route>
            <Route
              exact
              path="/signup"
              element={<SignUp key="signup" />}></Route>
          </Routes>
        </div>
      </Router>
    </OrderState>
  );
};

export default App;
