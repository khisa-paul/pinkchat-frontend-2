import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../../config";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [identifier, setIdentifier] = useState(""); // username or phone
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${API_BASE}/login`, {
        identifier, // send as identifier to backend
        password,
      });

      // Store token if backend returns one
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      alert("Login successful for " + res.data.user.username);
      navigate("/chat"); // redirect to chat page
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.message || err.message));
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-96 mx-auto mt-20">
      <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
        PinkChat Login
      </h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Username or Phone Number"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
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
          className={`w-full py-2 rounded-xl text-white ${
            loading ? "bg-pink-400" : "bg-pink-600 hover:bg-pink-700"
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
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

export default LoginPage;
