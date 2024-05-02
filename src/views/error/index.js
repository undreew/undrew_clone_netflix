import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';

import './Error.css';

function index() {
	return (
		<PageLayout header='true'>
			<div className='error'>
				<div className='error--container'>
					<h1>PAGE NOT FOUND</h1>
				</div>
			</div>
		</PageLayout>
	);
}

export default index;
