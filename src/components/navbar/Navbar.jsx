import React from 'react';
import './navbar.css';
import Avatar from '@mui/material/Avatar';


const NavLinks = () => (
	<React.Fragment>
		<p>
			<a href="/login">Login</a>
		</p>
		<Avatar
			alt="User Avatar"
		/>
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
