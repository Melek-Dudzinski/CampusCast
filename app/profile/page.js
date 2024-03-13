import './profile.css'
export default function Profile() {
    return (
        <>
        <header>
            <h1>Profile</h1>
        </header>
        <div className="profile-settings-box">
            <form id="profile-form" name="profile-form" method="post" action="/update-profile">
                <fieldset>
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

                    <section>
                        <legend>University</legend>
                            <label for="University_Name">Name of University:</label>
                            <input type="text" id="U_name" name="U_name" required />

                            <label for="Arrive">Usual Time to University:</label>
                            <input type="time" id="time" name="time" required />
                            
                            <label for="Leave">Usual Time Leaving University:</label>
                            <input type="time" id="time" name="time" required />
                    </section>

                    <section>
                        <legend>Home</legend>
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
    