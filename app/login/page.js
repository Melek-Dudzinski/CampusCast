import './login.css'
import Link from 'next/link'

export default function Login() {
    return (
        <>
    <header>
        <h1>Login to Check the Weather</h1>
    </header>
    <div class="login-box">
        <form id="form" name="login-form" method="post" action="">
            <fieldset>
                <a class="register" href="/register">Register?</a>
                            
                <hgroup class="sign">
                    <h1>Sign in</h1>
                </hgroup>

                <label for="username">Email</label><br/>
                <input type="email" id="username" name="username" required/><br/>
                {/* <!-- Use type="email" for email validation and "required" to make the field mandatory --> */}
                        
                <label for="password">Password:</label><br/>
                <input type="password" id="password" name="password" minlength="8" required/><br/><br/>
                {/* <!-- Use "minlength" to specify the minimum number of characters required for the password --> */}

                <div>    
                    <button type="submit">
                        <a href="main">Log In</a>
                    </button>
                    <button type="submit" id="cancel">Cancel</button>
                </div>    
            </fieldset>
        </form>
    </div>
    </>
    )
}