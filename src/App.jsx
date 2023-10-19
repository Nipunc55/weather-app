/** @format */

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Weather from './Weather';
import LoginComponent from './components/LoginComponent';

function App() {
	const [auth, setAuth] = useState(false);
	return <>{auth ? <Weather /> : <LoginComponent authCheck={setAuth} />}</>;
}

export default App;
