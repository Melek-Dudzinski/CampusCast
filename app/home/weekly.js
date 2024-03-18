import Image from "next/image";
import './weekly.css'

export default function Weekly({locationSelected}) {
  return (
    <>
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
    </>
  )
}