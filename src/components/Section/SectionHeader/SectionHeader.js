import React from 'react';
import Typography from '../../Typography/Typography';
import SectionMembership from '../SectionMembership/SectionMembership';

import './SectionHeader.css';

function SectionHeader(props) {
	const {hero, mainHeader, mainParagraph, membership} = props;

	return (
		<div className={`${hero ? 'hero--section-header' : 'section-header'} `}>
			<div className={`${hero ? 'hero--section-text' : 'section-text'}`}>
				<Typography
					type='h1'
					classes={hero ? 'hero--main-heading' : 'main-heading'}
				>
					{mainHeader}
				</Typography>
				{mainParagraph && (
					<Typography
						type='p'
						classes={hero ? 'hero--main-paragraph' : 'main-paragraph'}
					>
						{mainParagraph}
					</Typography>
				)}

				{/* IF SECTION IS A HERO RENDER A MEMBERSHIP FORM */}
				{membership && <SectionMembership />}
			</div>
		</div>
	);
}

export default SectionHeader;
