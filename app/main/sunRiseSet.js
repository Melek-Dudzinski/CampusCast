import Image from 'next/image'
import './weather.css'

export default function SunRiseSet() {
    return (
        <>
            <div class = "weather-box">
                <h3 id="titles">Sunrise & Sunset Time</h3>
                <ul class="weather">
                    <li>Sunrise</li>
                    <li>Sunset</li>
                </ul>
            </div>
        </>
    )
}