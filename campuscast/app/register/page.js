export default function Register() {
    return (
        <>
        <header>
            <h1>Loginnnnn to Check the Weather</h1>
        </header>
        <div class="login-box">
            <form id="form" name="login-form" method="post" action="">
                <fieldset>
                    <table>
                        <tr>
                            <td>
                                <hgroup>
                                    <h1>Register</h1>
                                </hgroup>
                            </td>
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
                                <button type="submit">Register</button>
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
    