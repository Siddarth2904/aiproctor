import React from 'react';
import { Navbar, CtaButton, CommonInput } from './../../components';
import './landing.css';

const Landing = () => {
	return (
		<React.Fragment>
			<Navbar/>
				<div className="landing-cta">
					<a href="/create">
						<CtaButton text="Create a test" />
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
