import React, { Component } from 'react';
import Container from './Container.js';
import Navigation from './Navigation.js';

class Flowers extends Component {
	render() {
	    return (
	    	<div>
	    	<Navigation />
			<Container query="flowers" />
			</div>
		);
}
}

export default Flowers;