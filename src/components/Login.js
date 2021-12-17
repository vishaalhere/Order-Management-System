import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import orderContext from "../context/orders/orderContext";

const Login = (props) => {
  const a = useContext(orderContext);
  const host = "https://ordermanagewebsite.herokuapp.com";
  const invert = a.mode === "dark" ? "light" : "dark";
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
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
      <form type="Post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className={`form-label text-${invert}`}>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className={`form-label text-${invert}`}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
            required
          />
        </div>

        <button type="submit" className={`btn btn-outline-${invert}`}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
