'use client'
import './home.css'
import Navbar from './navbar.js'
import WeatherContainer from './weatherContainer.js'
import SunRiseSet from './sunRiseSet.js'
import Reminder from './reminder.js'
import Weekly from './weekly.js'
import React, { useState } from 'react';

export default function Main() {
  const [uniToggle, setUniToggle] = useState(true)

  return (
    <>
      <title>Home page</title>
      <Navbar uniToggle={uniToggle} setUniToggle={setUniToggle}/>
      <div class="weather-container">
        <h2>Location</h2>
        <WeatherContainer Title="Departure" uniToggle={uniToggle}/>
        <WeatherContainer Title="Current Weather" uniToggle={uniToggle}/>
        <WeatherContainer Title="Return" uniToggle={uniToggle}/>
        <SunRiseSet />
        <Reminder />
        <Weekly />
      </div>
    </>
  )
}