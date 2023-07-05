import React, { useState } from 'react';
import { CommonInput, CtaButton } from '../../components';
import './login.css';

const inputField = ['Email ID', 'Password'];

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Login form submitted');
		console.log('Email:', email);
		console.log('Password:', password);
	};

	return (
		<div className="user-login">
			<div className="login-form">
				<h1 className="title-heading">User Login</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-fields">
						{inputField.map((item, index) => (
							<CommonInput
								key={index}
								placeholderText={item}
								value={item === 'Email ID' ? email : password}
								onChange={item === 'Email ID' ? handleEmailChange : handlePasswordChange}
							/>
						))}
					</div>
					<a href="/" className='input-fields'>
						<CtaButton text="Login" />
					</a>
				</form>
			</div>
		</div>
	);
};

export default Login;
