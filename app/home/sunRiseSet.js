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

    return (
        <>
            <div class = "weather-box">
                <h3 id="titles">Sunrise & Sunset Time</h3>
                <ul class="weather">
                    <li>Sunrise:</li>
                    <li>Sunset</li>
                </ul>
            </div>
        </>
    )
}