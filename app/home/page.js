'use client'
import './home.css'
import Navbar from './navbar.js'
import WeatherContainer from './weatherContainer.js'
import SunRiseSet from './sunRiseSet.js'
import Reminder from './reminder.js'
import Weekly from './weekly.js'
import React, { useState } from 'react';

export default function Main() {
  var uniLocation = "London";
  var homeLocation = "Paris";

  const [uniToggle, setUniToggle] = useState(true)
  const [locationSelected, setLocation] = useState(uniLocation)

  return (
    <>
      <title>Home page</title>
      <Navbar uniToggle={uniToggle} setUniToggle={setUniToggle} uniLocation={uniLocation} homeLocation={homeLocation} setLocation={setLocation}/>
      <div class="weather-container">
      <h2>{locationSelected}</h2>
        <WeatherContainer Title="Departure" uniToggle={uniToggle} locationSelecetd={locationSelected}/>
        <WeatherContainer Title="Current Weather" uniToggle={uniToggle} locationSelecetd={locationSelected}/>
        <WeatherContainer Title="Return" uniToggle={uniToggle} locationSelecetd={locationSelected}/>
        <SunRiseSet />
        <Reminder />
        <Weekly />
      </div>
    </>
  )
}