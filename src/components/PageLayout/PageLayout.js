import React, {Fragment} from 'react';
import Navbar from '../Navigation/Navbar/Navbar';

function PageLayout(props) {
	const {header, footer, children} = props;

	return (
		<Fragment>
			{/* MAIN NAVIGATION */}
			{/* MAY TOGGLE TRUE OR FALSE BASED ON THE CONFIG */}
			{header === 'true' && <Navbar />}

			{/* MAIN CONTENT */}
			{children}
		</Fragment>
	);
}

export default PageLayout;
