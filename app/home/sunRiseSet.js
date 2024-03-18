import './weather.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SunRiseSet({locationSelected}) {
  const [weatherData, setWeatherData] = useState(null);

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
    
  function formatTime(date) {
    let hours = date.getHours();
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

  let sunriseTime = weatherData ? formatTime(new Date(weatherData.sys.sunrise * 1000)) : "Loading...";
  let sunsetTime = weatherData ? formatTime(new Date(weatherData.sys.sunset * 1000)) : "Loading...";
  
  return (
    <>
      <div class = "weather-box">
        <h3 id="titles">Sunrise & Sunset Time</h3>
        <ul class="weather">
          <li>Sunrise: {sunriseTime}</li>
          <li>Sunset: {sunsetTime}</li>
        </ul>
      </div>
    </>
  )
}
