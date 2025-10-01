import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";

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
    <div className="login-form">
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account?{" "}
        <button type="button" onClick={() => setView("register")}>
          Register here
        </button>
      </p>
      <p>
        <button type="button" onClick={() => setView("forgot")}>
          Forgot Password?
        </button>
      </p>
    </div>
  );
}

export default Login;
