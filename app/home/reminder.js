import Image from 'next/image'
import './reminder.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Remainder({locationSelected}) {
  const [weatherData, setWeatherData] = useState(null);
  const [cookieValue, setCookieValue] = useState('');

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

  const handleSetCookie = (formData) => {
    const existingCookieValue = Cookies.get('reminder-cookies');
    if (existingCookieValue !== undefined && existingCookieValue !== null) {
      let newCookies = existingCookieValue
      newCookies.push(formData)
      Cookies.set('reminder-cookies', newCookies)
    } else {
      // Cookie doesn't exist, set it to an empty array
      Cookies.set('reminder-cookies', [formData]);
      console.log('Reminder cookie has been set to an empty array.');
    }
  };

  const handleGetCookie = () => {
    const cookies = Cookies.get('reminder-cookies');
    setCookieValue(cookies);
  };

  async function getSavedReminders(reminders) {
    // Define a cache object to store previously computed results
    const remindersCache = {};

    // Check if the result is already cached
    if (remindersCache.hasOwnProperty('cachedResult')) {
        return remindersCache.cachedResult;
    }

    // If not cached, perform the operation
    await handleGetCookie();
    const cookieValue = Cookies.get('reminder-cookies');
    const remindersFromCookie = cookieValue ? JSON.parse(cookieValue) : [];

    // Cache the result for future use
    remindersCache.cachedResult = remindersFromCookie;

    return remindersFromCookie;
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve the input value from the form
    const reminderInput = document.getElementById('text-box');
    const reminderValue = reminderInput.value;

    // Do something with the reminderValue (e.g., send it to a server, process it, etc.)
    handleSetCookie(reminderValue);

    // You can also reset the form if needed
    event.target.reset();
  }

  useEffect(() => {
    fetchData();
  }, [locationSelected]);
  
  let reminders = [];
  let savedReminders = getSavedReminders(reminders);

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

  return (
    <>
      <div id="reminder-box">
        <h3 id="titles">Reminders</h3>
          <ul class="weather">
            {/* Map over the array and create list items */}
            {reminders.map((reminders, index) => (
              <li key={index}>{reminders}</li>
            ))}
          </ul>

          <form id="reminder-form" onsubmit="handleSubmit(event)">
            <label for="reminder">Set reminder:</label>
            <p></p>
            <input type="text" id="text-box" name="reminder" required></input>
            <input id="reminder-button" type="submit"></input>
          </form>
      </div>
    </>
  )
}