import './register.css'

export default function Register() {
    return (
        <>
        <header>
            <h1>CampusCast Registration</h1>
        </header>
        <div class="login-box">
            <form id="form" name="login-form" method="post" action="">
                <fieldset>
                    <table>
                        <tr>
                            <td>
                                <hgroup>
                                    <h1 class="register">Register</h1>
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
                                <label htmlFor="weekday">Weekday:</label><br/>
                                <select id="weekday" name="weekday" required>
                                    <option value="">Select a weekday</option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="come-time">Come time:</label><br/>
                                <input type="time" id="time" name="come-time" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="leave-time">Leave time:</label><br/>
                                <input type="time" id="time" name="leave-time" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit">
						            <a href="login">Register</a>
					            </button>
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
    