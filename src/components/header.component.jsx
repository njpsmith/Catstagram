import React from 'react';
import { Link } from "react-router-dom";
import { SearchInput } from 'evergreen-ui';
import Navbar from './navbar.component';


const Header = () => {
	return (
		<div className="header">
			<div className="header__inner">	
				<Link to="/">
					<div className="logo">Catstagram</div>
				</Link>

				<div className="searchbar">
					<SearchInput placeholder="Search" />
				</div>

				<Navbar />
			</div>
		</div>
	);
}

export default Header;