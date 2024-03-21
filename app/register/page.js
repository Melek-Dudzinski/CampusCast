'use client';
import './register.css'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  //Constants that will be passed t home page for name, university and home locations
  const [myName, setName] = useState("Real Name");
  const [myHome, setHome] = useState("");
  const [myUni, setUni] = useState("");

  //Change name on input
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  //Change home location on input
  const handleHomeChange = (event) => {
    setHome(event.target.value);
  };

  //Change university location on input
  const handleUniChange = (event) => {
    setUni(event.target.value);
  };

  return (
    <>
      <title>Register</title>
      <header>
        <h1>CampusCast Registration</h1>
      </header>
      <div className="register-box">
        <form id="form" name="register-form" method="post" action="">
          <fieldset>
            <section>   
            <hgroup>
              <h2>Register</h2><br></br>
            </hgroup>
              <label htmlFor="username">Email</label>
              <input type="email" id="username" name="username"/>
              {/* <!-- Use type="email" for email validation and "required" to make the field mandatory --> */}    
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" minLength="8"/>
              {/* <!-- Use "minlength" to specify the minimum number of characters required for the password --> */}
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" onChange={handleNameChange}/>
            </section>
            <section>
              <label htmlFor="weekday" id="weekdayT" >Weekday Schedule:</label><br></br>
              <table border="1">
                {/* <!-- Making a table for the users to enter their timetable from monday to friday --> */}
                <tbody>
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
                </tbody>
              </table><br></br>
              <label htmlFor="travel-time">Travel time:</label>
              <select id="travel-time" name="travel-time">
                <option value="1">30 minutes</option>
                <option value="1">1 hour</option>
                <option value="2">1.5 hours</option>
                <option value="1">2 hours</option>
              </select>
            </section>
            <section>
              <label htmlFor="homeLocation">Home Location:</label>
              <input type="text" id="homeLocation" name="homeLocation" onChange={handleHomeChange}/>
              <label htmlFor="uniLocation">Uni Location:</label>
              <input type="text" id="uniLocation" name="uniLocation" onChange={handleUniChange}/>
            </section>
            <div className="form-actions">       
                <Link href={{pathname: '/home', query: {myName: myName, myHome: myHome, myUni: myUni}}}><button type="submit">Register</button></Link>
                <Link href="/"><button type="submit">Back</button></Link>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  )
}
    