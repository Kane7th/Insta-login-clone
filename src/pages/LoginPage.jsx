import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Footer from "../components/Footer";

const LoginPage = () => {
  // Define state for username, password, and login error message
  const [username, setUsername] = useState("");  // Holds the username input
  const [password, setPassword] = useState("");  // Holds the password input
  const [error, setError] = useState(""); // Holds any login error message

  // Mock credentials for demonstration purposes
  const mockUser = {
    username: "testuser", // Mock username
    password: "password123", // Mock password
  };

  // Handle login functionality when the login button is clicked
  const handleLogin = () => {
    // Check if the entered username and password match the mock credentials
    if (username === mockUser.username && password === mockUser.password) {
      alert("Login Successful!"); // Show success message if credentials are correct
      setError(""); // Clear any previous error messages
    } else {
      // Show error message if credentials are incorrect
      setError("Sorry, your password was incorrect. Please double-check your password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="insta-logo">Instagram</h1>

        {/* Input field for username, phone number, or email */}
        <InputField
          type="text"
          placeholder="Phone number, username, or email"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state on change
        />

        {/* Input field for password */}
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on change
        />

        {/* Login button, disabled if username or password is empty */}
        <Button
          text="Log In"
          onClick={handleLogin} // Trigger the login function on click
          disabled={!username || !password} // Disable the button if either field is empty
        />

        {/* Conditional error message if login fails */}
        {error && (
          <p className="error-message" style={{ color: "red" }}>
            {error}
          </p>
        )}

        {/* Divider with "OR" text */}
        <div className="divider">
          <div className="line" />
          <span className="or-text">OR</span>
          <div className="line" />
        </div>

        {/* Button to login with Facebook */}
        <button className="facebook-login">
          <i className="fab fa-facebook-square" /> Log in with Facebook
        </button>

        {/* Link for forgotten password */}
        <p className="forgot-password">Forgot password?</p>
      </div>

      {/* Signup option for users who don't have an account */}
      <div className="signup-box">
        Don’t have an account? <span className="signup-link">Sign up</span>
      </div>

      {/* App Store and Google Play download buttons */}
      <div className="app-store-buttons">
        <img
          alt="Download on the App Store"
          className="apple-button"
          src="https://static.cdninstagram.com/rsrc.php/v4/yt/r/Yfc020c87j0.png"
        />
        <img
          alt="Get it on Google Play"
          className="google-button"
          src="https://static.cdninstagram.com/rsrc.php/v4/yz/r/c5Rp7Ym-Klz.png"
        />
      </div>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default LoginPage;
