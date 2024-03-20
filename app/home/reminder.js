import Image from 'next/image'
import './reminder.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Remainder({locationSelected}) {
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

  //useEffect to fetch the data with the location as a variable
  useEffect(() => {
    fetchData();
  }, [locationSelected]);

  //creates an array to contain the warnings
  let reminders = []
  
  //fetches the current temperature from the weather API
  const temp = weatherData ? weatherData.main.temp : "Loading...";
  //if the weather is above 32 degrees appends a warning to reminders
  if (temp > 32) {
    reminders.push("High temperature today, remember to stay hydrated and wear sunscreen.")
  } 
  //if the weather is below freezing, appends a warning to reminders
  else if (temp < 0) {
    reminders.push("Low temperature expected, don't forget to layer up before heading out.")
  }

  //gets the main information about the weather from the weather API, i.e. Sunny, Rain, Cloudy, etc...
  const main = weatherData ? String(weatherData.weather[0].main) : "Loading...";
  //gets the short description of weather from the API, i.e. broken clouds, heavy rain, etc....
  const desc = weatherData ? String(weatherData.weather[0].description) : "Loading...";
  const descLower = desc.toLowerCase();
  //check if the title pertains to Rain and appends a warning to the array if so
  if (main.indexOf("Rain") !== -1|| main.indexOf("Drizzle") !== -1) {
    reminders.push("Rain likely later, plan your commute accordingly.")
  }
  //checks if the descriptions contains anything relevant to rain and appends the reminders array with a warning if so
  else if (descLower.indexOf("rain") !== -1 || descLower.indexOf("shower") !== -1) {
    reminders.push("Don't forget your umbrella! Rain is expected today.")
  } else if (descLower.indexOf("sleet") !== -1 || descLower.indexOf("hail") !== -1) {
    reminders.push("Rain likely later, plan your commute accordingly.")
  }
  
  //fetches the windspeed in m/s from the weather API
  const windMs = weatherData ? weatherData.wind.speed : "Loading...";
  //converts in into km/h, as those are more standard units for weather announcements
  const windKmh = windMs * 3.6;
  //checks if the title pertains to wind and adds a warning to the array if so
  if (main.indexOf("Wind") ==! -1|| main.indexOf("Gusts") !== -1) {
    reminders.push("Windy conditions expected, secure loose objects outside.")
  } 
  //if the descriptions contains anything about wind, appends the reminder arrays
  else if (descLower.indexOf("wind") !== -1) {
    reminders.push("Strong winds forecasted, consider postponing outdoor activities.")
  } 
  //if the windspeed is above a safe level, appends a warning to the array
  else if (windKmh > 40) {
    reminders.push("Windy conditions expected, secure loose objects outside.")
  }

  //checks if the title contains 'Snow' and appends a warning to the array if so
  if (main.indexOf("Snow") !== -1) {
    reminders.push("Snowfall is expected! Check rail disruptions and university announcements for class cancellations and campus closures.")
  }
  //if the description contains anything about snow appends warning to the array
  else if (descLower.indexOf("snow") !== -1) {
    reminders.push("Snowfall is expected! Check rail disruptions and university announcements for class cancellations and campus closures.")
  }

  //checks if the title is relevent to thunderstorm and appends the array if so
  if (main.indexOf("Thunderstorm") !== -1) {
    reminders.push("Thunderstorms are expected, so stay safe by staying indoors and away from windows.")
  }
  //checks if the description contains anything about thunderstorms and appaneds a warning accordingly 
  else if (descLower.indexOf("thunderstorm") !== -1) {
    reminders.push("Thunderstorms are expected, so stay safe by staying indoors and away from windows.")
  }

  //fetches the visibility for the location in meters
  const visibility = weatherData ? weatherData.visibility : "Loading...";
  //check if the visibility is below 1 km and adds a warning to the array if so
  if (visibility < 1000) {
    reminders.push("Extremely low visibility! Good idea to keep reflective gear or a flashlight.")
  }
  //checks if the weather has a title relevent to visbility or fog and appends to the array if so
  else if (main.indexOf("Fog") !== -1 || main.indexOf("Haze") !== -1) {
    reminders.push("Low visibility advisory, consider postponing non-essential travel until conditions improve.")
  }

  //checks if the weather is titled is smoke related and apends a warning to the array accordingly
  if (main.indexOf("Haze") !== -1 || main.indexOf("Smoke") !== -1) {
    reminders.push("Limit outdoor activities due to exposure to harmful particles, follow public health guidelines.")
  }

  //check if the weather is titled as Sandstorm and a warning to the array accordingly
  if (main.indexOf("Sandstorm") !== -1) {
    reminders.push("Wear protective gear like goggles and masks to shield your eyes and airway")
  }

  //checks if there are no weather warnings and adds the weather description to the array
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