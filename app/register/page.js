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

            <section>    
              <label for="username">Email</label>
                <input type="email" id="username" name="username" required/>
                {/* <!-- Use type="email" for email validation and "required" to make the field mandatory --> */}
                            
              <label for="password">Password:</label>
                <input type="password" id="password" name="password" minlength="8" required/>
                {/* <!-- Use "minlength" to specify the minimum number of characters required for the password --> */}
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
                <a href="login">Register</a>
              </button>
              <button type="submit" id="cancel">
                <a href="http://localhost:3000/">Back</a>
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  )
}
    