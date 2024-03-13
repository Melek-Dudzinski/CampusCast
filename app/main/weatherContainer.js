import Image from 'next/image'
import './weather.css'


export default function WeatherContainer({Title}) {
    return (
        <>
          <div class="weather-box">
            <h3 id="titles">{Title}</h3>
            <div class="weather">
              <ul class="elements">
                <li>Time<img src="/time.png" width="32" height="32" alt="Time symbol"/></li>
                <li>Temperature<img src="/temperature.png" id="temp" width="32" height="32" alt="Temperature symbol"/></li>
                <li>Wind<img src="/wind.png" id="wind" width="32" height="32" alt="Wind symbol"/></li>
                <li>Humidity<img src="/humidity.png" id="humidity" width="32" height="32" alt="Humidity symbol"/></li>
              </ul>
            </div>
          </div>
        </>
    )
}