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
                            <input type="text" id="name" name="name" required />

                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                            
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
                            <input type="text" id="U_name" name="U_name" required />

                            <label for="weekday">Weekday:</label>
                                <select id="weekday" name="weekday" required>
                                    <option value="">Select a weekday</option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                </select>

                            <label for="Arrive">Come Time:</label>
                            <input type="time" id="time" name="come-time" required />
                            
                            <label for="Leave">Leave Time:</label>
                            <input type="time" id="time" name="leave-time" required />
                    </section>

                    <section>
                        <legend>Home</legend>
                            <label for="Location">Location:</label>
                            <input type="text" id="location" name="location" minLength="100" required />
                            <label for="Postcode">Postcode:</label>
                            <input type="text" id="postcode" name="postcode" minLength="6" required />
                    </section>

                    <div className="form-actions">
                        <button type="submit">Save Changes</button>
                        <button type="submit" id="cancel">Cancel</button>
                    </div>
                </fieldset>
            </form>
        </div>
        </>
    )
}
    