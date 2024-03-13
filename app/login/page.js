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
                <table>
                    <tr>
                        <tr>
                            <td>
                                <a class="register" href="/register">Register?</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <hgroup class="sign">
                                    <h1>Sign in</h1>
                                </hgroup>
                            </td>
                        </tr>
                    </tr>
                    <tr>
                        <td>
                            <label for="username">Email</label><br/>
                            <input type="email" id="username" name="username" required/><br/>
                            {/* <!-- Use type="email" for email validation and "required" to make the field mandatory --> */}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="password">Password:</label><br/>
                            <input type="password" id="password" name="password" minlength="8" required/><br/><br/>
                            {/* <!-- Use "minlength" to specify the minimum number of characters required for the password --> */}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit">Log in</button>
                            <button type="submit" id="cancel">Cancel</button>
                        </td>
                    </tr>
                </table>
            </fieldset>
        </form>
    </div>
    </>
    )
}