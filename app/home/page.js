'use client'

import './home.css'
import Navbar from './navbar.js'
import WeatherContainer from './weatherContainer.js'
import SunRiseSet from './sunRiseSet.js'
import Reminder from './reminder.js'
import Weekly from './weekly.js'
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation'

export default function Main() {
  var uniLocation = "London";
  var homeLocation = "Africa";
  var leaveHomeTime = "8:00 AM"
  var arriveUniTime = "9:00 AM"
  var leaveUniTime = "6:00 PM"
  var arriveHomeTime = "7:00 PM"
  var realTime = true;

  const searchParams = useSearchParams()
  if (searchParams.get('myHome') !== null){
    homeLocation = searchParams.get('myHome')
  }
  if (searchParams.get('myUni') !== null){
    uniLocation = searchParams.get('myUni')
  }

  const leaveTimes = [leaveHomeTime, leaveUniTime]
  const arriveTimes = [arriveHomeTime, arriveUniTime]

  const [uniToggle, setUniToggle] = useState(true)
  const [locationSelected, setLocation] = useState(uniLocation)
  const [searchLocation, setSearchLocation] = useState("Arctic")

  return (
    <>
      <title>Home page</title>
      <Navbar uniToggle={uniToggle} setUniToggle={setUniToggle} uniLocation={uniLocation} homeLocation={homeLocation} setLocation={setLocation} setSearchLocation={setSearchLocation}/>
      <div class="weather-container">
      <h2>{"Destination: " + locationSelected}</h2>
        <WeatherContainer Title="Leave from " locationSelected={locationSelected} times={leaveTimes} uniLocation={uniLocation} homeLocation={homeLocation} at={true} to={false} searchLocation={searchLocation}/>
        <WeatherContainer Title="Current Weather" locationSelected={locationSelected} times={realTime} uniLocation={uniLocation} homeLocation={homeLocation} at={false} to={false} searchLocation={searchLocation}/>
        <WeatherContainer Title="Arrive at " locationSelected={locationSelected} times={arriveTimes} uniLocation={uniLocation} homeLocation={homeLocation} at={false} to={true} searchLocation={searchLocation}/>
        <SunRiseSet locationSelected={locationSelected}/>
        <Reminder locationSelected={locationSelected}/>
        <Weekly locationSelected={locationSelected}/>
      </div>
    </>
  )
}