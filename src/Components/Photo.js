import React from 'react';

const Photos = props =>
        id = this.props.data.id;
		farm = this.props.data.farm;
		server = this.props.data.server;
		secret = this.props.data.secret;
        <li>
        <img src=`https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}.jpg`} alt="" />
        </li>;

export default Photo;