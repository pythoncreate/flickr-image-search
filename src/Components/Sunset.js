import React, { Component } from 'react';
import Container from './Container.js';
import Navigation from './Navigation.js';
import SearchBar from './SearchBar.js';

class Sunset extends Component {
	render() {
	    return (
	    	<div>
	    	<Navigation />
			<Container query="sunset" />
			</div>
		);
}
}

export default Sunset;