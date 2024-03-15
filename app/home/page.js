import './home.css'
import Navbar from './navbar.js'
import WeatherContainer from './weatherContainer.js'
import SunRiseSet from './sunRiseSet.js'
import Reminder from './reminder.js'
import Weekly from './weekly.js'

export default function Main() {
  return (
    <>
      <Navbar />
      <div class="weather-container">
        <h2>Location</h2>
        <WeatherContainer Title="Departure"/>
        <WeatherContainer Title="Current Weather"/>
        <WeatherContainer Title="Return"/>
        <SunRiseSet />
        <Reminder />
        <Weekly />
      </div>
    </>
  )
}