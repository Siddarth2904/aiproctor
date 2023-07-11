import React, { useState } from 'react';
import { CommonInput, CtaButton } from '../../components';
import './login.css';

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
		if (email && password) {
			fetch('/api/signin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					// You can perform any necessary actions with the received data here
				})
				.catch((error) => {
					console.error(error);
				});
		} else {
			console.log('Please fill in all the required fields.');
		}
	};

	return (
		<div className="user-login">
			<div className="login-form">
				<h1 className="title-heading">User Login</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-fields">
						<CommonInput
							placeholderText="Email ID"
							value={email}
							onChange={handleEmailChange}
						/>
						<CommonInput
							placeholderText="Password"
							type="password"
							value={password}
							onChange={handlePasswordChange}
						/>
					<CtaButton onClick={handleSubmit} text="Login" />
					</div>

				</form>
			</div>
		</div>
	);
};

export default Login;
