// src/components/Login.js
import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE}/login`, { username, password });
      alert("Login successful for " + res.data.user.username);
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
        PinkChat Login
      </h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700"
        >
          Login
        </button>
      </form>

      <p className="text-center mt-4">
        Don’t have an account?{" "}
        <a href="/register" className="text-pink-600 hover:underline">
          Register
        </a>
      </p>
      <p className="text-center mt-2">
        <a href="/forgot-password" className="text-pink-600 hover:underline">
          Forgot Password?
        </a>
      </p>
    </div>
  );
}

export default Login;
