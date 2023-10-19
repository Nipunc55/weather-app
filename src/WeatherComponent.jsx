/** @format */

import React from 'react';

export default function WeatherComponent({ weather }) {
	const dateCalc = (timestamp) => {
		const date = new Date(timestamp * 1000);

		const month = date.getMonth() + 1;
		const day = date.getDate();
		return `${month} / ${day}`;
	};
	return (
		<div className='weather-component'>
			<div>City: {weather.name}</div>
			<div>Temperature: {weather.main.temp}°C</div>
			<div>Description: {weather.weather[0].description}</div>
			<div>Humidity: {weather.main.humidity}%</div>{' '}
		</div>
	);
}
