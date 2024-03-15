'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Image from 'next/image'
import './weather.css'

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const MY_API_KEY = "a21c017ec647ccb8b29b6c603b5b4a43"
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&dt=${date}&appid=${MY_API_KEY}`
      );
      setWeatherData(response.data);
      console.log(response.data); //You can see all the weather data in console log
    } catch (error) {
      console.error(error);
    }
  };

  //need the date object with the variable name date
  // Extract hours and minutes from the Date object
  const hours = date.getHours();
  const minutes = date.getMinutes();
  if (hours >= 12) {
    // Convert to 12-hour format and set period to "PM"
    period = "PM";
    hours = hours === 12 ? 12 : hours - 12;
  } else {
    // Set period to "AM"
    period = "AM";
    // If hours is 0 (midnight), set it to 12
    hours = hours === 0 ? 12 : hours;
  }
  const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${period}`;


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
};

export default function WeatherContainer({Title}) {
    return (
        <>
          <div class="weather-box">
            <h3 id="titles">{Title}</h3>
            <div class="weather">
              <ul class="elements">
                <li id="time">
                  Time: {formattedTime}<img src="/time.png" width="32" height="32" alt="Time symbol"/>
                </li>
                <li id="temperature">
                  Temperature: {weatherData.main.temp}°C<img src="/temperature.png" id="temp" width="32" height="32" alt="Temperature symbol"/>
                </li>
                <li id="wind">
                  Wind: {weatherData.wind.speed}m/s<img src="/wind.png" id="wind" width="32" height="32" alt="Wind symbol"/>
                </li>
                <li id="humidity">
                  Humidity: {weatherData.main.humidity}%<img src="/humidity.png" id="humidity" width="32" height="32" alt="Humidity symbol"/>
                </li>
              </ul>
            </div>
          </div>
        </>
    )
}