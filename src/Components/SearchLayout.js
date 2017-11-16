import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config.js';
import Navigation from './Navigation.js';
import Photos from './Photos.js';
import SearchBar from './SearchBar.js';

class SearchLayout extends Component {

  constructor (){
    super();
    this.state = {
        imgs:[],
        query: '',
        loading: true
    }
  }

  componentDidMount() {

  
}

  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({ 
        imgs: response.data.photos.photo,
        loading: false,
        query: query
      });
    })
    .catch(err => {
      console.log('Error happened during fetching!', err);
    });
  }

    render() {
        return (
            <div className="container">
            <SearchBar onSearch={this.performSearch}/>
            <h2>Images of {this.state.query}</h2>
              {
                (this.state.loading)
                ? <p>Loading....</p>
                : <Photos data={this.state.imgs}/>
              }
            </div>
            );
    }
}
export default SearchLayout;