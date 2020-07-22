import React from 'react';
import { Link } from "react-router-dom";
import Logo from './logo.component';
import Navbar from './navbar.component';


const Header = () => {
	return (
		<div className="header">
			<div className="header__inner">	
				<Logo />

				<Navbar />
			</div>
		</div>
	);
}

export default Header;