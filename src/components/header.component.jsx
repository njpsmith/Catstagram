import React from 'react';
import { Button } from 'evergreen-ui';
import {
  Link
} from "react-router-dom";
import { SearchInput } from 'evergreen-ui';


const Header = () => {
	return (
		<div className="header">
			<div className="header__inner">	
				<Link to="/">
					{/*<div className="logo">Instapussy</div>*/}
					<div className="logo">Catstagram</div>
				</Link>

				<div className="searchbar">
					<SearchInput placeholder="Search" />
				</div>

				<div className="navbar">
					<Link to="/about">
						<Button appearance="primary">ABOUT</Button>
					</Link>
					<Link to="/favourites">
						<Button appearance="primary">FAVOURITES</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;