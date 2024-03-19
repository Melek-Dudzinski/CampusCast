'use client'

import './home.css'
import Navbar from './navbar.js'
import WeatherContainer from './weatherContainer.js'
import SunRiseSet from './sunRiseSet.js'
import Reminder from './reminder.js'
import Weekly from './weekly.js'
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import axios from 'axios';

export default function Main() {
  var uniLocation = "Mile End";
  var homeLocation = "Finsbury Park";
  var currentLocation = "Homerton"
  var leaveHomeTime = "8:00 AM"
  var arriveUniTime = "9:00 AM"
  var leaveUniTime = "6:00 PM"
  var arriveHomeTime = "7:00 PM"
  var realTime = true;

  const searchParams = useSearchParams()
  if (searchParams.get('myHome') !== null && searchParams.get('myHome') !== ""){
    console.log(searchParams.get('myHome'))
    homeLocation = searchParams.get('myHome')
  }
  if (searchParams.get('myUni') !== null && searchParams.get('myUni') !== ""){
    uniLocation = searchParams.get('myUni')
  }

  const leaveTimes = [leaveHomeTime, leaveUniTime]
  const arriveTimes = [arriveHomeTime, arriveUniTime]

  const [uniToggle, setUniToggle] = useState(true)
  const [locationSelected, setLocation] = useState(uniLocation)
  const [searchLocation, setSearchLocation] = useState(currentLocation);
  // const [myLocation, setMyLocation] = useState();
  // const [lat, setLat] = useState();
  // const [lon, setLon] = useState();

  // const fetchLocation = async () => {
  //   try {
  //     const MY_API_KEY = "47587e19f823f14e08d26b63b7a1f07d"
  //     const response = await axios.get(
  //       `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${MY_API_KEY}`
  //     );
  //     console.log("4")
  //     setMyLocation(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // function getLocation() {
  //   if (navigator.geolocation) {
  //     console.log("2")
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // }

  // function showPosition(position) {
  //   setLat(position.coords.latitude);
  //   setLon(position.coords.longitude);
  //   console.log("3")
  //   fetchLocation();
  // }



  // useEffect(() => {
  //   console.log(searchLocation)
  //   console.log("1")
  //   getLocation();
  //   console.log(myLocation)
  //   if (typeof myLocation !== 'undefined') {
  //     console.log("have data")
  //     console.log(myLocation[0].name)
  //     setSearchLocation(myLocation[0].name)
  //   }
  // })

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