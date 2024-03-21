import './weekly.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Weekly({ locationSelected}) {
  //sets a useState for the weather data to ensure fteching it with a useEffect does not cause issues
  const [city, setCity] = useState('');
  //use states for each day of the week to prevent issues with the useEffect
  const [weatherDataMonday, setWeatherDataMonday] = useState(null);
  const [weatherDataTuesday, setWeatherDataTuesday] = useState(null);
  const [weatherDataWednesday, setWeatherDataWednesday] = useState(null);
  const [weatherDataThursday, setWeatherDataThursday] = useState(null);
  const [weatherDataFriday, setWeatherDataFriday] = useState(null);

  //fetches data with the fetchData method
  //method slightly altered the method to also take setter (aka the day of the week)
  const fetchData = async (date, setter) => {
    try {
      const MY_API_KEY = "47587e19f823f14e08d26b63b7a1f07d"
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${locationSelected}&units=metric&dt=${date}&appid=${MY_API_KEY}`
      );
      setter(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const today = new Date();
  //0 (Sunday) through 6 (Saturday)
  const dayOfWeek = today.getDay(); 

  //copy today's date
  const monday = new Date(today); 
  //calculate Monday by subtracting days from the current date
  monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7)); 
  const selectedMonday = Math.floor(monday.getTime() / 1000);

  //copy today's date
  const tuesday = new Date(today);
  //calculate Tuesday by subtracting days from the current date 
  tuesday.setDate(today.getDate() - ((dayOfWeek + 5) % 7)); 
  const selectedTuesday = Math.floor(tuesday.getTime() / 1000);

  //copy today's date
  const wednesday = new Date(today);
  //calculate Wednesday by subtracting days from the current date
  wednesday.setDate(today.getDate() - ((dayOfWeek + 4) % 7));
  const selectedWednesday = Math.floor(wednesday.getTime() / 1000);

  //copy today's date
  const thursday = new Date(today); 
  //calculate Thursday by subtracting days from the current date
  thursday.setDate(today.getDate() - ((dayOfWeek + 3) % 7));
  const selectedThursday = Math.floor(thursday.getTime() / 1000);

  //copy today's date
  const friday = new Date(today); 
  //calculate Friday by subtracting days from the current date
  friday.setDate(today.getDate() - ((dayOfWeek + 2) % 7)); 
  const selectedFriday = Math.floor(friday.getTime() / 1000);

  //for each day of the week uses the method fetchData with both the date and weatherData variable to store it in
  useEffect(() => {
    fetchData(selectedMonday, setWeatherDataMonday);
    fetchData(selectedTuesday, setWeatherDataTuesday);
    fetchData(selectedWednesday, setWeatherDataWednesday);
    fetchData(selectedThursday, setWeatherDataThursday);
    fetchData(selectedFriday, setWeatherDataFriday);
  }, [locationSelected, selectedMonday, selectedTuesday, selectedWednesday, selectedThursday, selectedFriday]);

  //for each day of the week fetches the minimum and maximum weather
  //if it cannot fetch it the weather will be displayed as 'Loading...'
  const tempLowMon = weatherDataMonday ? weatherDataMonday.main.temp_min : "Loading...";
  const tempHighMon = weatherDataMonday ? weatherDataMonday.main.temp_max : "Loading...";

  const tempLowTues = weatherDataTuesday ? weatherDataTuesday.main.temp_min : "Loading...";
  const tempHighTues = weatherDataTuesday ? weatherDataTuesday.main.temp_max : "Loading...";

  const tempLowWed = weatherDataWednesday ? weatherDataWednesday.main.temp_min : "Loading...";
  const tempHighWed = weatherDataWednesday ? weatherDataWednesday.main.temp_max : "Loading...";

  const tempLowThurs = weatherDataThursday ? weatherDataThursday.main.temp_min : "Loading...";
  const tempHighThurs = weatherDataThursday ? weatherDataThursday.main.temp_max : "Loading...";

  const tempLowFri = weatherDataFriday ? weatherDataFriday.main.temp_min : "Loading...";
  const tempHighFri = weatherDataFriday ? weatherDataFriday.main.temp_max : "Loading...";

  return (
    <>
      <div id="weekly-weather">
        <h3 id="titles">Weekly Forecast</h3>
        <ul className="weather">
          <li>Monday:
            <ul>
              <li>Highs: {tempHighMon}°C<img src="/hot.png" id="hot" alt="High temperature symbol"/></li>
              <li>Lows: {tempLowMon}°C<img src="/cold.png" id="cold"alt="Low temperature symbol"/></li>
            </ul>
          </li>
          <li>Tuesday:
            <ul>
              <li>Highs: {tempHighTues}°C<img src="/hot.png" id="hot" alt="High temperature symbol"/></li>
              <li>Lows: {tempLowTues}°C<img src="/cold.png" id="cold" alt="Low temperature symbol"/></li>
            </ul>
          </li>
          <li>Wednesday:
            <ul>
              <li>Highs: {tempHighWed}°C<img src="/hot.png" id="hot" alt="High temperature symbol"/></li>
              <li>Lows: {tempLowWed}°C<img src="/cold.png" id="cold" alt="Low temperature symbol"/></li>
            </ul>
          </li>
          <li>Thursday:
            <ul>
              <li>Highs: {tempHighThurs}°C<img src="/hot.png" id="hot" alt="High temperature symbol"/></li>
              <li>Lows: {tempLowThurs}°C<img src="/cold.png" id="cold" alt="Low temperature symbol"/></li>
            </ul>
          </li>
          <li>Friday:
            <ul>
              <li>Highs: {tempHighFri}°C<img src="/hot.png" id="hot" alt="High temperature symbol"/></li>
              <li>Lows: {tempLowFri}°C<img src="/cold.png" id="cold" alt="Low temperature symbol"/></li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}