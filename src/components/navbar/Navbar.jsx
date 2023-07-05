import React from 'react';
import './navbar.css';

const NavLinks = () => (
	<React.Fragment>
		<p>
			<a href="/login">Login</a>
		</p>
		<p>
			<a href="/register">Register</a>
		</p>
	</React.Fragment>
);

const Navbar = () => {
	return (
		<div className="landing-navbar">
			<div className="landing-navbar-links">
				<NavLinks />
			</div>
		</div>
	);
};

export default Navbar;
