'use client';
import './register.css'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Register() {

  const [myName, setName] = useState("Real Name");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <title>Register</title>
      <header>
        <h1>CampusCast Registration</h1>
      </header>
      <div class="register-box">
        <form id="form" name="register-form" method="post" action="">
          <fieldset>
            <hgroup>
              <h1>Register</h1><br></br>
            </hgroup>

            <section>    
              <label for="username">Email</label>
                <input type="email" id="username" name="username"/>
                {/* <!-- Use type="email" for email validation and "required" to make the field mandatory --> */}
                            
              <label for="password">Password:</label>
                <input type="password" id="password" name="password" minlength="8"/>
                {/* <!-- Use "minlength" to specify the minimum number of characters required for the password --> */}
              <label for="name">Name:</label>
                <input type="text" id="name" name="name" onChange={handleInputChange}/>
            </section>

            <section>
              <label for="weekday">Weekday Schedule:</label>
              <table border="1">
                {/* <!-- Making a table for the users to enter their timetable from monday to friday --> */}
                <tr>
                  <th>Weekday</th>
                  <th>Come Time</th>
                  <th>Leave Time</th>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td><input type="time" name="mondayComeTime"/></td>
                  <td><input type="time" name="mondayLeaveTime"/></td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td><input type="time" name="tuesdayComeTime"/></td>
                  <td><input type="time" name="tuesdayLeaveTime"/></td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td><input type="time" name="wednesdayComeTime"/></td>
                  <td><input type="time" name="wednesdayLeaveTime"/></td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td><input type="time" name="thursdayComeTime"/></td>
                  <td><input type="time" name="thursdayLeaveTime"/></td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td><input type="time" name="fridayComeTime"/></td>
                  <td><input type="time" name="fridayLeaveTime"/></td>
                </tr>
              </table>
                            
              <label for="travel-time">Travel time:</label>
              <select id="travel-time" name="travel-time">
                <option value="1">30 minutes</option>
                <option value="1">1 hour</option>
                <option value="2">1.5 hours</option>
                <option value="1">2 hours</option>
              </select>
            </section>

            <div className="form-actions">       
              <button type="submit">
                <Link href={{pathname: '/home', query: {myName: myName}}}>Register</Link>
              </button>
              <button type="submit">
                <a href="/">Back</a>
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  )
}
    