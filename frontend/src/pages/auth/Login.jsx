/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =async (e) => {
    try {
      e.preventDefault();
      const {data}=await axios.post('http://localhost:7000/api/users/login',{
        email,password,
      });
      console.log(data)
    } 
    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(email,password);
  }, [email,password]);
  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: 400 }}
        className="mx-auto mt-5"
      >
        <h1 className="h3 mb-3 fw-normal mt-5">Please sign in</h1>

        <div className="form-floating">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control "
            id="email"
            name="email"
            placeholder="name@example.com"
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control mt-3"
            id="password"
            name="password"
            placeholder="Password"
          />
          <label>Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
          Sign in
        </button>

        <Link to="/register" className="pt-3">
          Do not Have account? Signup
        </Link>
      </form>
    </div>
  );
};

export default Login;
