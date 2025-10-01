import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../../config"; // adjust relative path
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API_BASE}/register`, { username, phone, password });
      alert("Registration successful! Please login.");
      navigate("/"); // redirect to login page
    } catch (err) {
      alert("Registration failed: " + (err.response?.data?.message || err.message));
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-96 mx-auto mt-20">
      <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
        Register
      </h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Choose Username"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number (with country code e.g. +2547...)"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <p className="text-center mt-4">
        Already have an account?{" "}
        <a href="/" className="text-pink-600 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
}

export default RegisterPage;
