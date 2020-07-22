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
		this.setState({ categoryDataStringified: JSON.parse(JSON.stringify(catCategoryData)) }, 
			() => { console.log('catCategoryData', this.state.categoryDataStringified) }
		);
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
				<Combobox
				  openOnFocus
				  height={40}
				  items={
				  	categoryDataStringified.map((item) => (
						  item.name
						))
				  }
				  onChange={ selected => this.getBreedIDByName(selected) }
				  placeholder="Search by breed"
				/>
			</div>
		);
	}
}

export default connect()(Searchbar);




