import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Footer from "../components/Footer";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", username, password);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="insta-logo">Instagram</h1>

        <InputField
          type="text"
          placeholder="Phone number, username, or email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text="Log In" onClick={handleLogin} disabled={!username || !password} />

        <div className="divider">
          <div className="line" />
          <span className="or-text">OR</span>
          <div className="line" />
        </div>

        <button className="facebook-login">
          <i className="fab fa-facebook-square" /> Log in with Facebook
        </button>

        <p className="forgot-password">Forgot password?</p>
      </div>

      <div className="signup-box">
        Don’t have an account? <span className="signup-link">Sign up</span>
      </div>

      <Footer />

    </div>
  );
};

export default LoginPage;
