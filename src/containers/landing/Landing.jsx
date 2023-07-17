import React from 'react';
import { Navbar, CommonInput } from './../../components';
import './landing.css';

const Landing = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="landing-cta">
				<a href="/create">
					<button>Create a test</button>
				</a>
				<p className="desc">OR</p>
				<div className="input-item unique-link">
					<CommonInput placeholderText="Enter test code" />

				</div>
				<a href="/exam">Join</a>
			</div>
		</React.Fragment>
	);
};

export default Landing;
