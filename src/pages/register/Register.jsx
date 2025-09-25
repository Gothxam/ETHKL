import { bottom, right } from "@popperjs/core";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./register.css"
const Register = () => {
  const [email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameErrorRef = useRef(null);
  const emailErrorRef = useRef(null);
  const phErrorRef = useRef(null);
  const passErrorRef = useRef(null);

  const navigate = useNavigate();

  // Validation logic using refs
  const validate = (field, value) => {
    let message = "";

    switch (field) {
      case "name":
        if (!value.trim()) message = "Username is required";
        else if (value.length < 3) message = "At least 3 characters required";
        nameErrorRef.current.textContent = message;
        break;

      case "email":
        if (!value.trim()) message = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value))
          message = "Invalid email format";
        emailErrorRef.current.textContent = message;
        break;

      case "phNumber":
        if (!value.trim()) message = "Phone number is required";
        else if (!/^\d{10}$/.test(value))
          message = "Enter 10 digit number";
        phErrorRef.current.textContent = message;
        break;

      case "password":
        if (!value.trim()) message = "Password is required";
        else if (value.length < 8) message = "Min 8 characters required";
        passErrorRef.current.textContent = message;
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Run validation before submit
    validate("name", name);
    validate("email", email);
    validate("phNumber", phNumber);
    validate("password", password);

    if (
      nameErrorRef.current.textContent ||
      emailErrorRef.current.textContent ||
      phErrorRef.current.textContent ||
      passErrorRef.current.textContent
    ) {
      toast.error("Fix validation errors first");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((user) => user.name === name)) {
      toast.warning("Username already exists");
      return;
    }

    users.push({ name, password, email, phNumber });
    localStorage.setItem("users", JSON.stringify(users));
    toast.success("User registered successfully");

    setEmail("");
    setName("");
    setPassword("");
    setPhNumber("");
    navigate("/login");
  };

  return (
    <div className="container-fluid ">
      <div className="row  justify-content-center ">
        <div className="col-10 col-md-6 col-sm-10 ">
          
        </div>
        <div className=" d-flex justify-content-center" >
        <div className="position-relative w-100 hero-section register">
          {/* Background image */}
          <img className="img-fluid bg-img" src="../collection/6.avif" alt="" />

          <div className="overlay-content-login text-center text-dark px-3"  data-aos="">
            <div className="login  ">
            <h1 className="login-title mb-5">
              <b>Register</b>
            </h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mt-4 position-relative">
                {/* <label htmlFor="username" className="form-label fs-5">
                  Set Username
                </label> */}
                <small
                  ref={nameErrorRef}
                  className="text-danger "
                  style={{ fontSize: "14px", position:"absolute " ,bottom:"30px",right:"2px" }}
                ></small>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    validate("name", e.target.value);
                    
                  }}
                  placeholder="Enter Username"
                  className="form-control "
                />
                
              </div>

              <div className="mt-4 position-relative">
                {/* <label htmlFor="email" className="form-label fs-5">
                  Set Email
                </label> */}
                <small
                  ref={emailErrorRef}
                  className="text-danger"
                  style={{ fontSize: "14px" ,position:"absolute",bottom:"30px",right:"2px" }}
                ></small>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validate("email", e.target.value);
                  }}
                  placeholder="Enter Email"
                  className="form-control"
                />
                
              </div>

              <div className="mt-4 position-relative">
                {/* <label htmlFor="phNumber" className="form-label fs-5">
                  Set Ph. Number
                </label> */}
                 <small
                  ref={phErrorRef}
                  className="text-danger"
                  style={{ fontSize: "14px", position:"absolute" ,bottom:"30px",right:"2px" }}
                ></small>
                <input
                  type="number"
                  name="number"
                  id="phNumber"
                  value={phNumber}
                  onChange={(e) => {
                    setPhNumber(e.target.value);
                    validate("phNumber", e.target.value);
                  }}
                  placeholder="Enter Phone Number"
                  className="form-control"
                  required
                />
               
              </div>

              <div className="mt-4 position-relative">
                {/* <label htmlFor="password" className="form-label fs-5">
                  Set Password
                </label> */}
                <small
                  ref={passErrorRef}
                  className="text-danger"
                  style={{ fontSize: "14px", position:"absolute" ,bottom:"30px",right:"2px"}}
                ></small>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validate("password", e.target.value);
                  }}
                  placeholder="Enter Password"
                  className="form-control"
                  required
                />
                
              </div>

              <div className="text-center">
                <button className="login-btn ps-5 pe-5 fs-5 p-2">Sign up</button>
              </div>
              <div className="mt-3 text-center">
                <p>
                  Already have Account <a href="/login"><u>Sign in here</u></a>
                </p>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Register;
