import React from 'react';
import Photo from './Photo.js';

const Photos = props => {

	const results = props.data;
	let images = results.map(image => 
		<Photo url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}/>
	);

	return (
	    <div className="photo-container">
	    <h2>Results</h2>
		    <ul>
		   		{images}
		    </ul>
	    </div>
    );
}

export default Photos;