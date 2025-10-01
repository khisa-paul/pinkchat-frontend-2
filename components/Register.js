import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";

function Register({ setUser, setView }) {
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE}/register`, {
        phone,
        username,
        password,
      });
      setUser(res.data.user);
    } catch (err) {
      alert("Registration failed: " + err.message);
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="tel"
          placeholder="Phone number (e.g. +2547...)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
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
        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account?{" "}
        <button type="button" onClick={() => setView("login")}>
          Login here
        </button>
      </p>
    </div>
  );
}

export default Register;
