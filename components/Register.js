import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";
import "./Auth.css";

function Register({ setView }) {
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/register`, {
        phone,
        username,
        password,
      });
      alert("Registration successful! You can now log in.");
      setView("login");
    } catch (err) {
      alert("Registration failed: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <form onSubmit={handleRegister}>
          <input
            type="tel"
            placeholder="+254712345678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="^\+?[1-9]\d{7,14}$"
            required
          />
          <input
            type="text"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-btn">
            Register
          </button>
        </form>

        <p className="auth-links">
          Already have an account?{" "}
          <span onClick={() => setView("login")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
