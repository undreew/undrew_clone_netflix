import React from 'react';

import './Input.css';

function Input(props) {
	const {classes, type, label, labelText, placeholder, name} = props;

	return (
		<div className='form-control'>
			{label && <label htmlFor={name}>{labelText}</label>}
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				className={`input ${classes}`}
			/>
		</div>
	);
}

export default Input;
