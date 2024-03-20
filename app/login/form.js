'use client';
import './login.css'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Form() {

  const [myName, setName] = useState("Real Name");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <form id="form" name="login-form" method="post" action="">
        <fieldset>
          <hgroup className="sign">
            <h1>Log in</h1>
          </hgroup>
          <section>
            <label for="username">Email:</label>
            <input type="email" id="username" name="username" onChange={handleInputChange} required/><br/>
            {/* <!-- Use type="email" for email validation and "required" to make the field mandatory --> */}
                
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" minlength="8" required/><br/>
            {/* <!-- Use "minlength" to specify the minimum number of characters required for the password --> */}
          </section> 
          <button type="submit">
            <Link href={{pathname: 'home', query: {myName: myName}}}>Log In</Link>
          </button>
          <button type="submit">
            <a href="/">Back</a>
          </button>          
        </fieldset>
      </form>
    </>
  )
}