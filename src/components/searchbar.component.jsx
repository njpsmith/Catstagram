import React from 'react';
import { connect } from 'react-redux';
import { updateSelectedCatBreed } from '../actions';
import { Combobox } from 'evergreen-ui';
import catCategoryData from '../data/categoryData.json';

class Searchbar extends React.Component {
	state = {
		searchTerm: "",
		loading: false,
		categoryDataStringified: []
	}

	componentDidMount() {
		this.setState({ categoryDataStringified: JSON.parse(JSON.stringify(catCategoryData)) });
	}

	handleInputChange = (event) => {
		const value = event.target.value;
		
		this.setState({ searchTerm: value }, () => { 
			console.log('value', this.state.searchTerm);
			this.onSearch();
		});
	}

 	getBreedIDByName = (breedName) => {
 		const selectedBreed = this.state.categoryDataStringified.filter((item) => (
		  item.name == breedName
		))

 		const selectedBreedID = selectedBreed[0].id;

 		this.props.dispatch(updateSelectedCatBreed(selectedBreedID))
 	}
 	

	render() {
		const { categoryDataStringified } = this.state;

		return (
			<div className="searchbar">
				<p>Search cats by breed: </p>
				<Combobox
				  openOnFocus
				  height={40}
				  items={
				  	categoryDataStringified.map((item) => (
						  item.name
						))
				  }
				  onChange={ selected => this.getBreedIDByName(selected) }
				  placeholder="All breeds"
				/>
			</div>
		);
	}
}

export default connect()(Searchbar);




