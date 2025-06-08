import React, { useState, useEffect } from 'react'

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        if (!city) return;

        const weatherData = async () => {
            try {
                const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m&forecast_days=1')

                if (!response.ok) {
                    throw new error('failed to fetch weather data!');
                }

                const data = await response.json();
                setWeather(data);
                console.log(data);
                setError('');

            } catch (error) {
                setError(error.message);
                setWeather(null);
            }


        }
        weatherData();
    }, [city])

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <>
            <div style={{ padding: "20px" }}>
                <h2>Live Weather</h2>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={handleChange}
                />

                {error && <p style={{ color: "red" }}>{error}</p>}

                {weather && (
                    <div>
                        <h3>Weather Info (Static Location as Example)</h3>
                        <p>Temperature: {weather.current?.temperature_2m}°C</p>
                        <p>Humidity: {weather.current?.relative_humidity_2m}%</p>
                    </div>
                )}
            </div>
        </>
)}

export default Weather