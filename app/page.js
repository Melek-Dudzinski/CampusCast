import './landing.css'; 

export default function Landing() {
  return (
    <>
    <div>
        <h1>Welcome to CampusCast</h1>
        <p>
          CampusCast is an ambitious student project for weather. It is a weather app for students where the weather you see is the weather that matters
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
