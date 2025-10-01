import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";
import "./Auth.css";

function Login({ setUser, setView }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE}/login`, {
        username,
        password,
      });
      setUser(res.data.user);
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">PinkChat Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-links">
          Don’t have an account?{" "}
          <span onClick={() => setView("register")}>Register</span>
        </p>
        <p className="auth-links">
          <span onClick={() => setView("forgot")}>Forgot Password?</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
