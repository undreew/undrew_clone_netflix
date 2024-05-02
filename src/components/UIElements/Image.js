import React from 'react';

import './Image.css';

function Image(props) {
	const {source, alt, className, width, height} = props;

	return (
		<img
			src={source}
			alt={alt}
			className={`image ${className}`}
			width={width}
			height={height}
		/>
	);
}

export default Image;
