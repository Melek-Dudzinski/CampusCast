import './register.css'

export default function Register() {
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
                        
                    <label for="username">Email</label>
                    <input type="email" id="username" name="username" required/>
                    {/* <!-- Use type="email" for email validation and "required" to make the field mandatory --> */}
                           
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" minlength="8" required/>
                    {/* <!-- Use "minlength" to specify the minimum number of characters required for the password --> */}
                    
                    <label for="weekday">Weekday:</label>
                        <select id="weekday" name="weekday" required>
                            <option value="">Select a weekday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                        </select>
                        
                    <label htmlFor="come-time">Come time:</label>
                    <input type="time" id="time" name="come-time" required />
                           
                    <label htmlFor="leave-time">Leave time:</label>
                    <input type="time" id="time" name="leave-time" required />

                    <div className="form-actions">       
                        <button type="submit">
                            <a href="login">Register</a>
                        </button>
                        <button type="submit" id="cancel">Cancel</button>
                    </div>
                </fieldset>
            </form>
        </div>
        </>
    )
}
    