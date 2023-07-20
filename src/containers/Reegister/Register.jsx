import React, { useState } from "react";
import './register.css';

const Register = () => {
  const [udata, setUdata] = useState({
    email: "",
    fullName: "",
    password: "",
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

    const { email, fullName, password } = udata;

    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        fullName,
        password
      })
    });

    const data = await res.text();
    console.log(data);

    if (res.status === 422 || !data) {
    } else {
      setUdata({ email: '', fullName: '', password: '' });
    }
  }

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
            <button type="submit">Register</button>
          </div>
          {/* <div className="image-capture">
          <WebcamCapture />
        </div> */}
        </form>
      </div>
    </div>
  );
};

export default Register;

