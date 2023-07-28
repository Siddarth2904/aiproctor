import React, { useState } from "react";
import { WebcamCapture } from '../../components';
import './register.css';
import axios from 'axios';

const Register = () => {
  const [udata, setUdata] = useState({
    email: "",
    fullName: "",
    password: "",
    role: "Student",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/register', udata);
      console.log("Registration successful!");
    } catch (err) {
      console.log("Error during registration:", err);
    }
  };

  return (
    <div className="user-register">
      <div className="register-form">
        <h1 className="title-heading">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-fields">
            <input
              type="text"
              onChange={handleChange}
              value={udata.email}
              placeholder="Email"
              name="email"
              id="email"
            />
            <input
              type="text"
              onChange={handleChange}
              value={udata.fullName}
              placeholder="Full Name"
              name="fullName"
              id="fullName"
            />
            <input
              type="password"
              onChange={handleChange}
              value={udata.password}
              name="password"
              placeholder="Password"
              id="password"
            />
            <select
              name="role"
              onChange={handleChange}
              value={udata.role}
              id="role"
            >
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
            </select>
            <div className="image-capture">
              <WebcamCapture />
            </div>
          </div>
          <div className="button">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;