import React, { useState } from "react";
import { CommonInput, CtaButton } from '../../components';
import './register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const senddata = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      fullName,
      password,
    };
    console.log(JSON.stringify(formData));
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      console.warn('Invalid Details!');
    } else {
      console.log(data);
      setEmail('');
      setFullName('');
      setPassword('');
    }
  };

  return (
    <div className="user-register">
      <div className="register-form">
        <h1 className="title-heading">Register</h1>
        <div className="input-fields">
          <CommonInput
            placeholderText="Email ID"
            type={"text"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CommonInput
            placeholderText="Full Name"
            type={"text"}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <CommonInput
            placeholderText="Password"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={senddata}>Register</button>
          {/* <CtaButton onClick={senddata} text="Register" /> */}
        </div>
        {/* <div className="image-capture">
          <WebcamCapture />
        </div> */}
      </div>
    </div>
  );
};

export default Register;