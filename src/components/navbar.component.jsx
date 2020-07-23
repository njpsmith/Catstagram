import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'evergreen-ui';
import DarkModeToggle from './dark-mode-toggle.component';


const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/about">
				<Button appearance="primary">About</Button>
			</Link>
			<Link to="/favourites">
				<Button appearance="primary">Favourites</Button>
			</Link>			

			<DarkModeToggle />
		</div>
	);
}

export default Navbar;