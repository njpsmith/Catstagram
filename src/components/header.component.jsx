import React from 'react';
import { Button, SearchIcon } from 'evergreen-ui';


const Header = () => {
	return (
		<div className="header">
			<div className="header__inner">	
				<div className="logo">CATSTAGRAM</div>

				<div className="searchbar">Searchbar <SearchIcon color="#262626" /></div>

				<div className="navbar">
					<Button appearance="primary">ABOUT</Button>
					<Button appearance="primary">FAVOURITES</Button>
				</div>
			</div>
		</div>
	);
}

export default Header;