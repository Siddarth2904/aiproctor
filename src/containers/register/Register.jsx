import React, { useState } from "react";
<<<<<<< HEAD:src/containers/register/Register.jsx
<<<<<<< HEAD:src/containers/Reegister/Register.jsx
import { WebcamCapture } from '../../components';
=======
// import { CommonInput } from '../../components';
>>>>>>> parent of d4f620e (.):src/containers/register/Register.jsx
=======
>>>>>>> parent of 7136cef (.):src/containers/Reegister/Register.jsx
import './register.css';

const Register = () => {
  const [udata, setUdata] = useState({
    email: "",
    fullName: "",
    password: "",
  });
  const adddata = (e) => {
    const { name, value } = e.target;
    // console.log(e.target);
    setUdata(() => {
      return {
        ...udata,
        [name]: value,
      };
    });
  };
  const senddata = async (e) => {
    e.preventDefault();
<<<<<<< HEAD:src/containers/Reegister/Register.jsx

<<<<<<< HEAD:src/containers/register/Register.jsx
    try {
      await axios.post('http://localhost:5000/register', udata);
      console.log("Registration successful!");
    } catch (err) {
      console.log("Error during registration:", err);
=======
    const { email, fullName, password } = udata
=======
    const { email, fullName, password } = udata;
>>>>>>> parent of 7136cef (.):src/containers/Reegister/Register.jsx

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

<<<<<<< HEAD:src/containers/register/Register.jsx

    const data = await res.json()
    // console.log(data);

    if (res.status === 422 || !data) {
    } else {
      setUdata({ ...udata, email: '', fullName: '', password: '' })
>>>>>>> parent of d4f620e (.):src/containers/register/Register.jsx
=======
    const data = await res.text();
    console.log(data);

    if (res.status === 422 || !data) {
    } else {
      setUdata({ email: '', fullName: '', password: '' });
>>>>>>> parent of 7136cef (.):src/containers/Reegister/Register.jsx
    }
  }

  return (
    <div className="user-register">
      <div className="register-form">
        <h1 className="title-heading">Register</h1>
        <form method="POST">
          <div className="input-fields">
            <input
              type="text"
              onChange={adddata}
              value={udata.email}
              placeholder="Email"
              name="email"
              id="email"
            />
            <input
              type="text"
              onChange={adddata}
              value={udata.fullName}
              placeholder="Full Name"
              name="fullName"
              id="fullName"
            />
            <input
              type="password"
              onChange={adddata}
              value={udata.password}
              name="password"
              placeholder="Password"
              id="password"
            />
<<<<<<< HEAD:src/containers/register/Register.jsx
<<<<<<< HEAD:src/containers/Reegister/Register.jsx
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
=======
>>>>>>> parent of 7136cef (.):src/containers/Reegister/Register.jsx
            <button type="submit">Register</button>
=======
            <button onClick={senddata}>Register</button>
>>>>>>> parent of d4f620e (.):src/containers/register/Register.jsx
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

