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

  let reminders = []
    
  const temp = weatherData ? weatherData.main.temp : "Loading...";
  if (temp > 32) {
    reminders.push("High temperature today, remember to stay hydrated and wear sunscreen.")
  } else if (temp < 0) {
    reminders.push("Low temperature expected, don't forget to layer up before heading out.")
  }

  const main = weatherData ? String(weatherData.weather[0].main) : "Loading...";
  const desc = weatherData ? String(weatherData.weather[0].description) : "Loading...";
  const descLower = desc.toLowerCase();
  if (main.indexOf("Rain") !== -1|| main.indexOf("Drizzle") !== -1) {
    reminders.push("Rain likely later, plan your commute accordingly.")
  } else if (descLower.indexOf("rain") !== -1 || descLower.indexOf("shower") !== -1) {
    reminders.push("Don't forget your umbrella! Rain is expected today.")
  } else if (descLower.indexOf("sleet") !== -1 || descLower.indexOf("hail") !== -1) {
    reminders.push("Rain likely later, plan your commute accordingly.")
  }
  
  const windMs = weatherData ? weatherData.wind.speed : "Loading...";
  const windKmh = windMs * 3.6;
  if (main.indexOf("Wind") ==! -1|| main.indexOf("Gusts") !== -1) {
    reminders.push("Windy conditions expected, secure loose objects outside.")
  } else if (descLower.indexOf("wind") !== -1) {
    reminders.push("Strong winds forecasted, consider postponing outdoor activities.")
  } else if (windKmh > 40) {
    reminders.push("Windy conditions expected, secure loose objects outside.")
  }

  if (main.indexOf("Snow") !== -1) {
    reminders.push("Snowfall is expected! Check rail disruptions and university announcements for class cancellations and campus closures.")
  } else if (descLower.indexOf("snow") !== -1) {
    reminders.push("Snowfall is expected! Check rail disruptions and university announcements for class cancellations and campus closures.")
  }

  if (main.indexOf("Thunderstorm") !== -1) {
    reminders.push("Thunderstorms are expected, so stay safe by staying indoors and away from windows.")
  } else if (descLower.indexOf("thunderstorm") !== -1) {
    reminders.push("Thunderstorms are expected, so stay safe by staying indoors and away from windows.")
  }

  const visibility = weatherData ? weatherData.vvisibility : "Loading...";
  if (visibility < 1000) {
    reminders.push("Extremely low visibility! Good idea to keep reflective gear or a flashlight.")
  } else if (main.indexOf("Fog") !== -1 || main.indexOf("Haze") !== -1) {
    reminders.push("Low visibility advisory, consider postponing non-essential travel until conditions improve.")
  }

  if (main.indexOf("Haze") !== -1 || main.indexOf("Smoke") !== -1) {
    reminders.push("Limit outdoor activities due to exposure to harmful particles, follow public health guidelines.")
  }

  if (main.indexOf("Sandstorm") !== -1) {
    reminders.push("Wear protective gear like goggles and masks to shield your eyes and airway")
  }

  if (reminders.length === 0) {
    reminders.push("Today's weather is " + descLower)
  }

  return (
    <>
      <div id="reminder-box">
        <h3 id="titles">Reminders</h3>
          <ul className="weather">
            {/* Map over the array and create list items */}
            {reminders.map((reminders, index) => (
              <li key={index}>{reminders}</li>
            ))}
          </ul>
      </div>
    </>
  )
}