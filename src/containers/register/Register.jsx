import React, { useState } from "react";
// import { CommonInput } from '../../components';
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
    const { email, fullName, password } = udata

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


    const data = await res.json()
    // console.log(data);

    if (res.status === 422 || !data) {
    } else {
      setUdata({ ...udata, email: '', fullName: '', password: '' })
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
            <button onClick={senddata}>Register</button>
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