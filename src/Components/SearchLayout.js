import React, { Component } from 'react';
import Container from './Container.js';
import Navigation from './Navigation.js';
import SearchBar from './SearchBar.js';

class SearchLayout extends Component {
	render() {
	    return (
	    	<div>
	    	<SearchBar />
	    	<Navigation />
	    	<Container />
			</div>

		);
}
}

export default SearchLayout;