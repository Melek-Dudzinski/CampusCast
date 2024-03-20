import Image from "next/image";
import './weekly.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Weekly({ locationSelected}) {
  const [city, setCity] = useState('');
  const [weatherDataMonday, setWeatherDataMonday] = useState(null);
  const [weatherDataTuesday, setWeatherDataTuesday] = useState(null);
  const [weatherDataWednesday, setWeatherDataWednesday] = useState(null);
  const [weatherDataThursday, setWeatherDataThursday] = useState(null);
  const [weatherDataFriday, setWeatherDataFriday] = useState(null);

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
  const dayOfWeek = today.getDay(); // 0 (Sunday) through 6 (Saturday)

  const monday = new Date(today); // Copy today's date
  monday.setDate(today.getDate() - (dayOfWeek - 1)); // Calculate Monday by subtracting days from the current date
  // Use the date for Monday of the current week directly
  const selectedMonday = Math.floor(monday.getTime() / 1000);

  const tuesday = new Date(today); // Copy today's date
  tuesday.setDate(today.getDate() - (dayOfWeek - 2)); // Calculate Monday by subtracting days from the current date
  const selectedTuesday = Math.floor(tuesday.getTime() / 1000);

  const wednesday = new Date(today); // Copy today's date
  wednesday.setDate(today.getDate() - (dayOfWeek - 3)); // Calculate Monday by subtracting days from the current date
  const selectedWednesday = Math.floor(wednesday.getTime() / 1000);

  const thursday = new Date(today); // Copy today's date
  thursday.setDate(today.getDate() - (dayOfWeek - 4)); // Calculate Monday by subtracting days from the current date
  const selectedThursday = Math.floor(thursday.getTime() / 1000);

  const friday = new Date(today); // Copy today's date
  friday.setDate(today.getDate() - (dayOfWeek - 5)); // Calculate Monday by subtracting days from the current date
  const selectedFriday = Math.floor(friday.getTime() / 1000);

  useEffect(() => {
    fetchData(selectedMonday, setWeatherDataMonday);
    fetchData(selectedTuesday, setWeatherDataTuesday);
    fetchData(selectedWednesday, setWeatherDataWednesday);
    fetchData(selectedThursday, setWeatherDataThursday);
    fetchData(selectedFriday, setWeatherDataFriday);
  }, [locationSelected, selectedMonday, selectedTuesday]);

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
          <li>Wednesday
            <ul>
              <li>Highs: {tempHighWed}°C<img src="/hot.png" id="hot" alt="High temperature symbol"/></li>
              <li>Lows: {tempLowWed}°C<img src="/cold.png" id="cold" alt="Low temperature symbol"/></li>
            </ul>
          </li>
          <li>Thursday
            <ul>
              <li>Highs: {tempHighThurs}°C<img src="/hot.png" id="hot" alt="High temperature symbol"/></li>
              <li>Lows: {tempLowThurs}°C<img src="/cold.png" id="cold" alt="Low temperature symbol"/></li>
            </ul>
          </li>
          <li>Friday
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