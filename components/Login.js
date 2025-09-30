import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";

function Login({ setUser, setView }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE}/api/login`, { phone, password });
      setUser(res.data.user); // assuming backend returns user object
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => setView("register")}>Register</button>
      <button onClick={() => setView("forgot")}>Forgot Password</button>
    </div>
  );
}

export default Login;
