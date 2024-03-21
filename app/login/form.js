'use client';
import './login.css'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Form() {

  //Const for the name
  const [myName, setName] = useState("John Doe");

  return (
    <>
      <form id="form" name="login-form" method="post" action="">
        <fieldset>
          <hgroup className="sign">
            <h1>Log in</h1>
          </hgroup>
          <section>
            <label for="username">Email:</label>
            <input type="email" id="username" name="username" required/><br/>
            {/* <!-- Use type="email" for email validation and "required" to make the field mandatory --> */}
                
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" minlength="8" required/><br/>
            {/* <!-- Use "minlength" to specify the minimum number of characters required for the password --> */}
          </section> 
          <div id="footer">
            <Link rel="email" href={{pathname: 'home', query: {myName: myName}}}><button type="submit">Log In</button></Link>
            <Link href="/"><button type="submit">Back</button></Link>
          </div>       
        </fieldset>
      </form>
    </>
  )
}