import React, { Component } from 'react';
import Container from './Container.js';
import Navigation from './Navigation.js';

class Clouds extends Component {
	render() {
	    return (
	    	<div>
	    	<Navigation />
			<Container query="clouds" />
			</div>
		);
}
}

export default Clouds;