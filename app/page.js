import './landing.css';

export default function Landing() {
  return (
    <>
      <div>
        <h1>Welcome to CampusCast</h1>
        <p className='description'>
          CampusCast: Weather That Gets You! Your Personalized Weather App Designed by Students, for Students.
        </p>
          <a href="login"><button type="submit">Sign in</button></a>
          <a href="register"><button type="submit">Register</button></a>
      </div>
    </>
  );
}
