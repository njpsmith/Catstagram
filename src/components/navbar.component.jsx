import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'evergreen-ui';

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/about">
				<Button appearance="primary">About</Button>
			</Link>
			<Link to="/favourites">
				<Button appearance="primary">Favourites</Button>
			</Link>
		</div>
	);
}

export default Navbar;