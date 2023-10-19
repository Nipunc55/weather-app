/** @format */

// Weather.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherComponent from './WeatherComponent';
const KEY = import.meta.env.VITE_WEATHER_API_KEY;

const Weather = () => {
	const [weather, setWeather] = useState(null);
	const [limit, setLimit] = useState(4);
	const [forcastData, setForcastData] = useState([]);
	const [cordinates, setcordinates] = useState({
		lat: 6.927079,
		lon: 79.861244,
	});
	const handleCordinates = (event) => {
		setcordinates((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};
	const expandForcast = () => {
		setLimit(7);
	};
	const collapsForcast = () => {
		setLimit(4);
	};
	const handleSearch = () => {
		getForcastWeatheData();
		getCurrentWeatheData();
	};
	const getCurrentWeatheData = async () => {
		try {
			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cordinates.lat}&lon=${cordinates.lon}&appid=${KEY}`;
			const response = await axios.get(url);
			// console.log(response.data);
			setWeather(response.data);
		} catch (error) {
			console.error('Error fetching weather data: ', error);
		}
	};
	const getForcastWeatheData = async () => {
		try {
			const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${cordinates.lat}&lon=${cordinates.lon}&appid=${KEY}`;
			const response = await axios.get(url);
			console.log(response.data.list);

			setForcastData(response.data.list);
			// setWeather(response.data);
		} catch (error) {
			console.error('Error fetching weather data: ', error);
		}
	};

	useEffect(() => {
		// getForcastWeatheData();
		getCurrentWeatheData();
	}, []);

	if (!weather) {
		return <div>Loading...</div>;
	}

	return (
		<div className='window'>
			<div className='top-bar'>
				<div className='search-bar'>
					<input
						name='lan'
						placeholder='latitude'
						onChange={handleCordinates}
						type='number'></input>
					<input
						name='lon'
						placeholder='longitude'
						onChange={handleCordinates}
						type='number'></input>
					<button onClick={handleSearch}>Search</button>
				</div>
			</div>
			<div className='midle-window'>
				<div>Today Weather</div>
				<WeatherComponent weather={weather} />

				{forcastData.length > 0 && (
					<>
						<div>Forcast Weather</div>
						{forcastData.slice(1, limit).map((data, index) => (
							<WeatherComponent key={index} weather={data} />
						))}
						{limit == 4 ? (
							<button onClick={expandForcast}>see more</button>
						) : (
							<button onClick={collapsForcast}>see less</button>
						)}
					</>
				)}
			</div>

			{/* Add more data as needed */}
		</div>
	);
};

export default Weather;
