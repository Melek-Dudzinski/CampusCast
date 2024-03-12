import Image from 'next/image'
import './weather.css'


export default function WeatherContainer({Title}) {
    return (
        <>
          <div class="weather-box">
            <h3 id="titles">{Title}</h3>
            <div class="weather">
              <ul class="elements">
                <li>Time<Image src="/time.png" width="30" height="30" alt="Time symbol"/></li>
                <li>Temperature<Image src="/temperature.png" id="temp" width="30" height="30" alt="Temperature symbol"/></li>
                <li>Wind<Image src="/wind.png" id="wind" width="30" height="30" alt="Wind symbol"/></li>
                <li>Humidity<Image src="/humidity.png" id="humidity" width="30" height="30" alt="Humidity symbol"/></li>
              </ul>
            </div>
          </div>
        </>
    )
}