import React, {Fragment} from 'react';

import './Dropdown.css';

function Dropdown(props) {
	const {items, classes} = props;

	return (
		<Fragment>
			<select name='dropdown' className={`dropdown ${classes}`}>
				{items.map((item, index) => {
					return (
						<option value={item.value} key={index}>
							{item.text}
						</option>
					);
				})}
			</select>
		</Fragment>
	);
}

export default Dropdown;
