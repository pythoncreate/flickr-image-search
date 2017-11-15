import React, { Component } from 'react';
import Container from './Container.js';
import Navigation from './Navigation.js';

class Home extends Component {
	render() {
	    return (
	    	<div>
	    	<Navigation />
			<div>Or <a href="/search">search</a> for your favorite images</div>
			</div>
		);
}
}

export default Home;

