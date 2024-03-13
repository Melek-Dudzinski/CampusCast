import Image from 'next/image'
import './weather.css'


export default function WeatherContainer({Title}) {
    return (
        <>
          <div class="weather-box">
            <h3 id="titles">{Title}</h3>
            <div class="weather">
              <ul class="elements">
                <li>Time: 12:00am<img src="/time.png" width="32" height="32" alt="Time symbol"/></li>
                <li>Temperature: 97°C<img src="/temperature.png" id="temp" width="32" height="32" alt="Temperature symbol"/></li>
                <li>Wind: 5m/s<img src="/wind.png" id="wind" width="32" height="32" alt="Wind symbol"/></li>
                <li>Humidity: 10%<img src="/humidity.png" id="humidity" width="32" height="32" alt="Humidity symbol"/></li>
              </ul>
            </div>
          </div>
        </>
    )
}