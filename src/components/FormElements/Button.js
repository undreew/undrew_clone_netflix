import React from 'react';
import {Link} from 'react-router-dom';

import './Button.css';

function Button(props) {
	const {type, to, children, classes, onClick} = props;

	if (to) {
		return (
			<Link to={to} className={`button ${classes}`}>
				{children}
			</Link>
		);
	}

	return (
		<button type={type} className={`button ${classes}`} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
