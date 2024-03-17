'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './weather.css'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


export default function WeatherContainer({Title, locationSelected, times, uniLocation, homeLocation, at}) {
  var currentTime = {}
  var loc = {}

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const MY_API_KEY = "47587e19f823f14e08d26b63b7a1f07d"
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&dt=${date}&appid=${MY_API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  if (typeof times === "boolean") {
    loc = ""
  } else {
    if (at) {
      if (locationSelected === uniLocation) {
        loc = homeLocation
      } else {
        loc = uniLocation
      }
    } else {
      loc = locationSelected
    }
  }

  if (typeof times === "boolean") {
      //Need the date object with the variable name date exported
      var date = new Date()
      //To get a specific time would need to calculate how far from that time you are using variables

      // Extract hours and minutes from the Date object
      let hours = date.getHours();
      let minutes = String(date.getMinutes()).padStart(2, "0")
      let period = ""
      if (hours < 12) {
        // Set period to "AM"
        period = "AM";
        // If hours is 0 (midnight), set it to 12
        if (hours === 0) {
          hours = 12
        }
      } else {
        // Convert to 12-hour format and set period to "PM"
        period = "PM";
        hours = hours - 12;
      }
      currentTime = hours + ":" + minutes + period;
  } else if (city === uniLocation) {
    currentTime = times[0]
  } else if (city === homeLocation) {
    currentTime = times[1]
  }

  useEffect(() => {
    if (typeof city !== 'undefined' && city !== locationSelected){
      setCity(locationSelected)}
      fetchData();
  });

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter city name" value={city} onChange={handleInputChange}/>
      <button type="submit">Get Weather</button>
      </form> */}
      {weatherData ? (
        <div class="weather-box">
          <h3 id="titles">{Title + loc}</h3>
          <div class="weather">
            <ul class="elements">
              <li id="time">
                Time: {currentTime}<img src="/time.png" width="32" height="32" alt="Time symbol"/>
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
        ) : (
          <p>Loading</p>
        )}
    </>
  )
}