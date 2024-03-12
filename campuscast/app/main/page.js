import './main.css'
import Image from 'next/image'

export default function Main() {
  return (
    <>
      <header>
          <h1 id="greeting">Hello User!</h1>
      </header>
      <nav>
          <Image class="nav-images" src="/personal.png" width="100" height="100" alt="Personal"/>
          <Image class="nav-images" src="/university1.png" width="100" height="100" alt="University"/>
          <Image class="nav-images" src="/house.png" width="100" height="100" alt="Home"/>
          <Image class="nav-images" src="/search.png" width="100" height="100" alt="Search"/>
        </nav>
        <div class="weather-container">
          <h2>Location</h2>
          <div class="weather-box">
            <h3 id="titles">Departure</h3>
            <div class="weather">
              <ul class="elements">
                <li>Time<Image src="/time.png" width="30" height="30" alt="Time symbol"/></li>
                <li>Temperature<Image src="/temperature.png" id="temp" width="30" height="30" alt="Temperature symbol"/></li>
                <li>Wind<Image src="/wind.png" id="wind" width="30" height="30" alt="Wind symbol"/></li>
                <li>Humidity<Image src="/humidity.png" id="humidity" width="30" height="30" alt="Humidity symbol"/></li>
              </ul>
            </div>
          </div>
          <div class="weather-box">
            <h3 id="titles">Current weather</h3>
            <div class="weather">
              <ul class="elements">
                <li>Time<img src="img/time.png"/></li>
                <li>Temperature<img src="img/temperature.png" id="temp"/></li>
                <li>Wind<img src="img/wind.png" id="wind"/></li>
                <li>Humidity<img src="img/humidity.png" id="humidity"/></li>
              </ul>
            </div>
          </div>
          <div class="weather-box">
            <h3 id="titles">Return</h3>
            <div class="weather">
              <ul class="elements">
                <li>Time<img src="img/time.png"/></li>
                <li>Temperature<img src="img/temperature.png" id="temp"/></li>
                <li>Wind<img src="img/wind.png" id="wind"/></li>
                <li>Humidity<img src="img/humidity.png" id="humidity"/></li>
              </ul>
            </div>
          </div>
          
          <div class = "weather-box">
              <h3 id="titles">Sunrise & Sunset Time</h3>
              <ul class="weather">
                  <li>Sunrise</li>
                  <li>Sunset</li>
              </ul>
              
          </div>

          <div id="reminder-box">
              <h3 id="titles">Reminders</h3>
          </div>

          <div id="weekly-weather">
              <h3 id="titles">Weekly Forecast</h3>
              <ul class="weather">
                  <li>Monday</li>
                  <li>Tuesday</li>
                  <li>Wednesday</li>
                  <li>Thursday</li>
                  <li>Friday</li>
              </ul>
              
          </div>
        </div>
    </>
  )
}