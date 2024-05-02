import React from 'react';
import Button from '../../FormElements/Button';
import Input from '../../FormElements/Input';

import './SectionMembership.css';

function SectionMembership(props) {
	const {style} = props;

	return (
		<div className='membership' style={style}>
			<p className='membership--text'>
				Ready to watch? Enter your email to create or restart your membership.
			</p>
			{/* INPUT AND BUTTON */}
			{/* CAN ALSO CREATE A FORM COMPONENT */}
			<form className='membership--form'>
				<Input
					type='input'
					name='email'
					placeholder='Email Address'
					classes='membership--input'
				/>
				<Button type='button' classes='membership--button'>
					Get Started {'>'}
				</Button>
			</form>
		</div>
	);
}

export default SectionMembership;
