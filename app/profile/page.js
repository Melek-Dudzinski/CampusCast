import './profile.css'
export default function Profile() {

  const myName = "Real Name";
  const myEmail = "real@email.com";
  const uniName = "QMUL";
  const uniPostcode = "E3 4PR";
  const mondayCome = "10:00";
  const mondayLeave = "12:00";
  const tuesdayCome = "09:00";
  const tuesdayLeave = "17:00";
  const wednesdayCome = "13:00";
  const wednesdayLeave = "16:00";
  const thursdayCome = "09:00";
  const thursdayLeave = "12:00";
  const fridayCome = "15:00";
  const fridayLeave = "18:00";
  const weeklyTimes = [mondayCome, mondayLeave, tuesdayCome, tuesdayLeave, wednesdayCome, wednesdayLeave, thursdayCome, thursdayLeave, fridayCome, fridayLeave];
  const homePostcode = "E3 4NX";


  return (
    <>
      <title>Profile</title>
      <header>
        <h1>Profile</h1>
      </header>
      <div className="profile-settings-box">
        <form id="profile-form" name="profile-form" method="post" action="/update-profile">
          <fieldset>
            <section>
              <legend>Personal Information</legend>
              <label for="name">Full Name:</label>
              <input type="text" id="name" name="name" value={myName}/>

              <label for="email">Email:</label>
              <input type="email" id="email" name="email" value={myEmail}/>
                            
              <label for="password">New Password:</label>
              <input type="password" id="password" name="password" minLength="8"/>
              <small>Leave blank if you don't want to change the password</small>

              <label for="bio">Bio:</label>
              <textarea id="bio" name="bio" rows="4" />
              <small>Leave blank if you don't want to change or have any bio</small>
            </section>
            
            <section>
              <legend>University</legend>
              <label for="University_Name">Name of University:</label>
              <input type="text" id="U_name" name="U_name" value={uniName}/>
              <label for="Postcode">Postcode:</label>
              <input type="text" id="U-postcode" name="U-postcode" minLength="6" value={uniPostcode}/>
              <label for="weekday">Weekday Schedule:</label>
                            
              <table border="1">
              <tbody>
                <tr>
                  <th>Weekday</th>
                  <th>Come Time</th>
                  <th>Leave Time</th>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td><input type="time" name="mondayComeTime" value={weeklyTimes[0]}/></td>
                  <td><input type="time" name="mondayLeaveTime" value={weeklyTimes[1]}/></td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td><input type="time" name="tuesdayComeTime" value={weeklyTimes[2]}/></td>
                  <td><input type="time" name="tuesdayLeaveTime" value={weeklyTimes[3]}/></td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td><input type="time" name="wednesdayComeTime" value={weeklyTimes[4]}/></td>
                  <td><input type="time" name="wednesdayLeaveTime" value={weeklyTimes[5]}/></td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td><input type="time" name="thursdayComeTime" value={weeklyTimes[6]}/></td>
                  <td><input type="time" name="thursdayLeaveTime" value={weeklyTimes[7]}/></td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td><input type="time" name="fridayComeTime" value={weeklyTimes[8]}/></td>
                  <td><input type="time" name="fridayLeaveTime" value={weeklyTimes[9]}/></td>
                </tr>
              </tbody>
              </table>
                <label for="travel-time">Travel time:</label>
                <select id="travel-time" name="travel-time">
                  <option value="1">30 minutes</option>
                  <option value="1">1 hour</option>
                  <option value="2">1.5 hours</option>
                  <option value="1">2 hours</option>
                </select>
            </section>
            
            <section>
              <legend>Home</legend>
              <label for="Postcode">Postcode:</label>
              <input type="text" id="H-postcode" name="H-postcode" minLength="6" value={homePostcode}/>
            </section>
            
            <div className="form-actions">
              <button type="submit">
                <a href="home">Save Changes</a>
              </button>
              <button type="submit" id="cancel">
                <a href="home">Back</a>
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
)
}
    