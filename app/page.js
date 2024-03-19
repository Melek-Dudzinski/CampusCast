import './landing.css';

export default function Landing() {
  return (
    <>
      <div>
        <h1>Welcome to CampusCast</h1>
        <p>
          CampusCast: Weather That Gets You! Your Personalized Weather App Designed by Students, for Students.
        </p>
        <button type="submit">
          <a href="login">Sign in</a>
        </button>
        <button type="submit">
          <a href="register">Register</a>
        </button>
      </div>
    </>
  );
}
