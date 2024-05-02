import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import LandingPage from './views/landing/index';
import ErrorPage from './views/error/index';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
