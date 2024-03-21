import './weather.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SunRiseSet({locationSelected}) {
  //sets a useState for the weather data to ensure fteching it with a useEffect does not cause issues
  const [weatherData, setWeatherData] = useState(null);

  //fetches data with the fetchData method
  const fetchData = async () => {
  try {
      const MY_API_KEY = "47587e19f823f14e08d26b63b7a1f07d"
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${locationSelected}&units=metric&appid=${MY_API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [locationSelected]);
  
  //changes time from UNIX time (time counting seconds from 1970) to standard 12 hour time (with AM and PM)
  function formatTime(date) {
    //fetches the hours in 24 hour time
    let hours = date.getHours();
    //fetches the minutes since the hour has passed and also adds a 0 at the beginning if the minutes are less than 0
    let minutes = String(date.getMinutes()).padStart(2, "0")
    let period = ""
    if (hours < 12) {
      // Set period to "AM"
      period = " AM";
      // If hours is 0 (midnight), set it to 12
      if (hours === 0) {
        hours = 12
      }
    } else {
      // Convert to 12-hour format and set period to "PM"
      period = " PM";
      if (hours !== 12) {
        hours -= 12;
      } else {
        hours = hours;
      }
    }
    const formattedTime = hours + ":" + minutes + period;
    return formattedTime
  };

  //Fetches the data for sunrise and sunset, and if it fails sets them as 'Loading...'
  let sunriseTime = weatherData ? formatTime(new Date(weatherData.sys.sunrise * 1000)) : "Loading...";
  let sunsetTime = weatherData ? formatTime(new Date(weatherData.sys.sunset * 1000)) : "Loading...";
  
  return (
    <>
      <div className = "weather-box">
        <h3 id="titles">Sunrise & Sunset Time</h3>
        <ul className="weather">
          <li>Sunrise: {sunriseTime}<img src="/sunrise.png" id="sunrise" width="32" height="32" alt="Sunrise symbol"/></li>
          <li>Sunset: {sunsetTime}<img src="/sunset.png" id="sunset" width="32" height="32" alt="Sunset"/></li>
        </ul>
      </div>
    </>
  )
}
