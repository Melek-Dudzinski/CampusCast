import './login.css'

export default function Form() {
  return (
    <>
      <form id="form" name="login-form" method="post" action="">
        <fieldset>
          <hgroup className="sign">
            <h1>Sign in</h1>
          </hgroup>
          <section>
            <label for="username">Email:</label>
            <input type="email" id="username" name="username" required/><br/>
            {/* <!-- Use type="email" for email validation and "required" to make the field mandatory --> */}
                
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" minlength="8" required/><br/>
            {/* <!-- Use "minlength" to specify the minimum number of characters required for the password --> */}
          </section> 
          <button type="submit">
            <a href="home">Log In</a>
          </button>
          <button type="submit">
            <a href="/">Back</a>
          </button>          
        </fieldset>
      </form>
    </>
  )
}