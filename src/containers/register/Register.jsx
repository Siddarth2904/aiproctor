import React, { useState } from 'react';
import { CommonInput, CtaButton, WebcamCapture } from '../../components';
import './register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (email && fullName && password) {
      fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          fullName,
          password,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          // You can perform any necessary actions with the received data here
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      console.log('Please fill in all the required fields.');
    }
  };

  return (
    <div className="user-register">
      <div className="register-form">
        <h1 className="title-heading">Register</h1>
        <div className="input-fields">
          <CommonInput
            placeholderText="Email ID"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <CommonInput
            placeholderText="Full Name"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
          <CommonInput
            placeholderText="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="image-capture">
          <WebcamCapture />
        </div>
        <button onClick={handleRegister}>
          <CtaButton text="Register" />
        </button>
      </div>
    </div>
  );
};

export default Register;
