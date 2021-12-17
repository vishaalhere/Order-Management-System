import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import orderContext from "../context/orders/orderContext";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const host = "https://ordermanagewebsite.herokuapp.com";
  const a = useContext(orderContext);
  const invert = a.mode === "dark" ? "light" : "dark";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json.authtoken);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("User Already Exists with that Email, try logging in");
      navigate("/login");
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
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className={`form-label text-${invert}`}>
            Name
          </label>
          <input
            type="text"
            className="form-control"
            required
            value={credentials.name}
            onChange={onChange}
            id="name"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className={`form-label text-${invert}`}>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            required
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
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
            required
            minLength={5}
            onChange={onChange}
            name="password"
            id="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className={`form-label text-${invert}`}>
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.cpassword}
            minLength={5}
            onChange={onChange}
            name="cpassword"
            id="cpassword"
          />
        </div>

        <button type="submit" className={`btn btn-${invert}`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
