/** @format */

import React, { useState } from 'react';
import './LoginComponent.css';

const username = import.meta.env.VITE_USER_NAME;
const password = import.meta.env.VITE_PASSWORD;
export default function LoginComponent({ authCheck }) {
	const [input, setInput] = useState({ username: '', password: '' });
	const handleInput = (event) => {
		setInput((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};
	const handleSubmit = (event) => {
		event.preventDefault();

		if (input.username == username && input.password == password) {
			authCheck(true);
			return true;
		}
		alert('invalid credentials');
		return false;
	};
	return (
		<div id='login-form-wrap'>
			<h2>Login</h2>
			<form id='login-form' onSubmit={handleSubmit}>
				<p>
					<input
						onChange={handleInput}
						type='text'
						id='username'
						name='username'
						placeholder='Username'
						required
					/>
					<i className='validation'>
						<span></span>
						<span></span>
					</i>
				</p>
				<p>
					<input
						onChange={handleInput}
						type='password'
						id='password'
						name='password'
						placeholder='Password'
						required
					/>
					<i className='validation'>
						<span></span>
						<span></span>
					</i>
				</p>
				<p>
					<input type='submit' id='login' value='Login' />
				</p>
			</form>
		</div>
	);
}
