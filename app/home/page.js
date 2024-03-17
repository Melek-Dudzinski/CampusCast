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
  var homeLocation = "Africa";
  var leaveHomeTime = "8:00 AM"
  var arriveUniTime = "9:00 AM"
  var leaveUniTime = "6:00 PM"
  var arriveHomeTime = "7:00 PM"
  var realTime = true;

  const leaveTimes = [leaveHomeTime, leaveUniTime]
  const arriveTimes = [arriveHomeTime, arriveUniTime]

  const [uniToggle, setUniToggle] = useState(true)
  const [locationSelected, setLocation] = useState(uniLocation)

  return (
    <>
      <title>Home page</title>
      <Navbar uniToggle={uniToggle} setUniToggle={setUniToggle} uniLocation={uniLocation} homeLocation={homeLocation} setLocation={setLocation}/>
      <div class="weather-container">
      <h2>{"Destination: " + locationSelected}</h2>
        <WeatherContainer Title="Leave from " locationSelected={locationSelected} times={leaveTimes} uniLocation={uniLocation} homeLocation={homeLocation} at={true} to={false}/>
        <WeatherContainer Title="Current Weather" locationSelected={locationSelected} times={realTime} uniLocation={uniLocation} homeLocation={homeLocation} at={false} to={false}/>
        <WeatherContainer Title="Arrive at " locationSelected={locationSelected} times={arriveTimes} uniLocation={uniLocation} homeLocation={homeLocation} at={false} to={true}/>
        <SunRiseSet locationSelected={locationSelected}/>
        <Reminder />
        <Weekly />
      </div>
    </>
  )
}