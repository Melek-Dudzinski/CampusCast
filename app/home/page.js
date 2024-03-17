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
  var realTime = true;

  const leaveTimes = ["8am", "6pm"]
  const arriveTimes = ["9am", "7pm"]

  const [uniToggle, setUniToggle] = useState(true)
  const [locationSelected, setLocation] = useState(uniLocation)

  return (
    <>
      <title>Home page</title>
      <Navbar uniToggle={uniToggle} setUniToggle={setUniToggle} uniLocation={uniLocation} homeLocation={homeLocation} setLocation={setLocation}/>
      <div class="weather-container">
      <h2>{locationSelected}</h2>
        <WeatherContainer Title="Leave" locationSelected={locationSelected} times={leaveTimes} uniLocation={uniLocation} homeLocation={homeLocation}/>
        <WeatherContainer Title="Current Weather" locationSelected={locationSelected} times={realTime} uniLocation={uniLocation} homeLocation={homeLocation}/>
        <WeatherContainer Title="Arrive" locationSelected={locationSelected} times={arriveTimes} uniLocation={uniLocation} homeLocation={homeLocation}/>
        <SunRiseSet />
        <Reminder />
        <Weekly />
      </div>
    </>
  )
}