import Image from 'next/image'
import './reminder.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Remainder({locationSelected}) {
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

    let reminders = ""
    reminders += "Test reminder\n"
    
    const temp = weatherData ? weatherData.main.temp : "Loading...";
    if (temp > 32) {
      reminders += "Make sure to bring a water bottle, as weather is paryicualrly hot\n"
    } else if (temp < 0) {
      reminders += "Make sure you have enough layers as it is particularly cold today\n"
    }
    
    return (
        <>
            <div id="reminder-box">
                <h3 id="titles">Reminders</h3>
                <p>{reminders}</p>
            </div>
        </>
    )
}