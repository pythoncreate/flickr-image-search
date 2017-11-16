import React from 'react';
import Photo from './Photo.js';
import NoImages from './NoImages.js';
import Title from './Title.js';

const Photos = props => {

	const results = props.data;
	let images;
	if(results.length > 0) {
		images = results.map(image => 
		<Photo url={
		`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
		 } 
		 key={image.id} />
		);
	} else {
		images = <NoImages />
	}

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