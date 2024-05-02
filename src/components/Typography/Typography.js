import React from 'react';

import './Typography.css';

function Typography(props) {
	const {type, classes, children, styles, onClick} = props;

	let content;
	switch (type) {
		case 'h1':
			return (content = (
				<h1 className={`${classes}`} style={styles} onClick={onClick}>
					{children}
				</h1>
			));

		case 'h2':
			return (content = (
				<h2 className={`${classes}`} onClick={onClick}>
					{children}
				</h2>
			));

		case 'h3':
			return (content = (
				<h3 className={`${classes}`} onClick={onClick}>
					{children}
				</h3>
			));

		case 'h4':
			return (content = (
				<h4 className={`${classes}`} onClick={onClick}>
					{children}
				</h4>
			));

		case 'h5':
			return (content = (
				<h5 className={`${classes}`} onClick={onClick}>
					{children}
				</h5>
			));

		case 'h6':
			return (content = (
				<h6 className={`${classes}`} onClick={onClick}>
					{children}
				</h6>
			));

		case 'p':
			return (content = (
				<p className={`${classes}`} onClick={onClick}>
					{children}
				</p>
			));

		case 'span':
			return (content = (
				<span className={`${classes}`} onClick={onClick}>
					{children}
				</span>
			));

		default:
			break;
	}

	return <div>{content}</div>;
}

export default Typography;
