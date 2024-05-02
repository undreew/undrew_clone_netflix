import React from 'react';
import {NavLink} from 'react-router-dom';

import Image from '../../UIElements/Image';
import Button from '../../FormElements/Button';
import Dropdown from '../../FormElements/Dropdown';

import './Navbar.css';

import {dropDownItems} from '../../../util/dropdown/items';
import {useWindowSize} from '../../../hooks/useWindowSize';
import {logoImages} from '../../../util/navbar/images';
import {useCalculateImage} from '../../../hooks/useCalculateLogoImage';

function Navbar() {
	const {width} = useWindowSize();
	const {image} = useCalculateImage(logoImages, width);

	const mobile = width < 550 ? 'mobile' : '';

	return (
		<nav className='navbar'>
			<div className='navbar--content'>
				{/* NAVBRAND */}
				<NavLink to='/'>
					<Image source={image} alt='NETFLIX' />
				</NavLink>

				{/* NAVITEMS */}
				<div className='navbar--items'>
					<Dropdown items={dropDownItems} classes={mobile} />
					<Button to='/register' classes={mobile}>
						Sign In
					</Button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
