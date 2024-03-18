import './profile.css'
export default function Profile() {
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
                            <input type="text" id="name" name="name" />

                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email"/>
                            
                            <label for="password">New Password:</label>
                            <input type="password" id="password" name="password" minLength="8" />
                            <small>Leave blank if you don't want to change the password</small>

                            <label for="bio">Bio:</label>
                            <textarea id="bio" name="bio" rows="4" />
                            <small>Leave blank if you don't want to change or have any bio</small>
                    </section>
                    <section>
                        <legend>University</legend>
                            <label for="University_Name">Name of University:</label>
                            <input type="text" id="U_name" name="U_name" />
                            <label for="Postcode">Postcode:</label>
                            <input type="text" id="U-postcode" name="U-postcode" minLength="6" />
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
                            <input type="text" id="H-postcode" name="H-postcode" minLength="6" />
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
    