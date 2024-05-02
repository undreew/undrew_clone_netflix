import React from 'react';
import {Link} from 'react-router-dom';

import Typography from '../Typography/Typography';
import Dropdown from '../FormElements/Dropdown';

import './Footer.css';

import {footerLinks} from '../../util/footer/links';
import {dropDownItems} from '../../util/dropdown/items';

function Footer() {
	return (
		<div className='footer'>
			<div className='footer--content'>
				<Link to='/contact-us' className='footer--content__contact'>
					Questions? Contact us.
				</Link>

				<div className='footer--content__links'>
					{footerLinks.map((item, index) => {
						return (
							<div className='footer--content__link-container'>
								<Link
									to={`/${item.link}`}
									className='footer--content__link'
									key={index}
								>
									{item.text}
								</Link>
							</div>
						);
					})}
				</div>

				<Dropdown items={dropDownItems} classes='footer--dropdown' />

				<Typography type='p' classes='footer--netflix-ph'>
					Netflix Philippines
				</Typography>
			</div>
		</div>
	);
}

export default Footer;
