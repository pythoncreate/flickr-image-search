import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config.js';
import Navigation from './Navigation.js';
import Photos from './Photos.js';
import SearchBar from './SearchBar.js';

class Container extends Component {

  constructor (){
    super();
    this.state = {
        imgs:[]
    }
  }

  componentDidMount(tags='cat') {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
		.then(response => {
			this.setState({ imgs: response.data});
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
}
    render() {
        return (
          <div className="container">
          <SearchBar />
          <Navigation />
          </div>
          );
    }
}
export default Container;