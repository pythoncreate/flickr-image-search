import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config.js';
import Photos from './Photos.js';

class Container extends Component {

  constructor (props){
    super(props);
    this.state = {
        imgs:[],
        query: this.props.query,
        loading: true
    }
  }

  componentDidMount() {
    this.performSearch();
  
}

  performSearch = (query = this.state.query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({ 
        imgs: response.data.photos.photo,
        loading: false
      });
    })
    .catch(err => {
      console.log('Error happened during fetching!', err);
    });
  }

//<SearchBar onSearch={this.performSearch}/>

    render() {
        return (
            <div className="container">
            <h2>Images of {this.state.query}</h2>
              {
                (this.state.loading)
                ? <p>Loading....</p>
                : <Photos data={this.state.imgs} />
              }
            </div>
            );
    }
}
export default Container;