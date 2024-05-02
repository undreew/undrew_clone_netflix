import React, {Fragment} from 'react';
import {useWindowSize} from '../../hooks/useWindowSize';
import Image from '../UIElements/Image';

import './Section.css';

import SectionHeader from './SectionHeader/SectionHeader';

function Section(props) {
	const {backImage, backAlt, hero, dual, regular, reverse, children} = props;
	const {width} = useWindowSize();

	let content;
	if (hero) {
		content = (
			<Fragment>
				<Image
					source={backImage}
					alt={backAlt}
					className={`${hero ? 'hero-section--image' : 'section--image'}`}
				/>

				{/* HERO HEADER */}
				<SectionHeader {...props} />
			</Fragment>
		);
	} else if (dual) {
		content = (
			<div className={`dual-section--content ${reverse ? 'reverse' : ''}`}>
				{width >= 950 || backImage ? (
					<Image
						source={backImage}
						alt={backAlt}
						className={`${hero ? 'hero-section--image' : 'section--image'}`}
					/>
				) : null}

				{/* HERO HEADER */}
				<SectionHeader {...props} />
			</div>
		);
	} else if (regular) {
		return (
			<div className='regular-section'>
				<div className='regular-section--content'>
					<SectionHeader {...props} />
					{children}
				</div>
			</div>
		);
	}

	return (
		<div className={`${hero ? 'hero-section' : 'dual-section'}`}>{content}</div>
	);
}

export default Section;
