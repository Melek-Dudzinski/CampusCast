'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const MY_API_KEY = "a21c017ec647ccb8b29b6c603b5b4a43"
      // Get the current date
      const currentDate = new Date();
      // Calculate the difference in days between the current day and Monday (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
      // Extract hours and minutes from the time string
      const daysUntilMonday = (1 - currentDate.getDay() + 7) % 7;
      // Add the necessary number of days to get to the next Monday
      const nextMonday = new Date(currentDate.getTime() + daysUntilMonday * 24 * 60 * 60 * 1000);
      // Convert the date to a Unix timestamp (in seconds)
      const nextMondayTimestamp = Math.floor(nextMonday.getTime() / 1000);

      // Extract hours and minutes from the Date object
      let hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      if (hours >= 12) {
        // Convert to 12-hour format and set period to "PM"
        period = "PM";
        hours -= 12;
      } else {
        // Set period to "AM"
        period = "AM";
        // If hours is 0 (midnight), set it to 12
        if (hours === 0) {
          hours = 12;
        }
      }
      if (minutes <= 10) {
        const formattedTime = `${hours} + ":" + ${minutes} + "0" + ${period}`
      } else {
        const formattedTime = `${hours} + : + ${minutes} + ${period}`;
      }

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&dt=${nextMonday}&appid=${MY_API_KEY}`
      );
      setWeatherData(response.data);
      console.log(response.data); //You can see all the weather data in console log
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
          <p>Date : {formattedTime}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels like : {weatherData.main.feels_like}°C</p>
          <p>Humidity : {weatherData.main.humidity}%</p>
          <p>Pressure : {weatherData.main.pressure}</p>
          <p>Wind Speed : {weatherData.wind.speed}m/s</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;