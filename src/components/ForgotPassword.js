import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";
import "./Auth.css";

function ForgotPassword({ setView }) {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE}/forgot-password`, {
        phone,
      });
      setMessage(res.data.message || "If this number is registered, you’ll get reset instructions.");
    } catch (err) {
      setMessage("Failed to process request: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Reset Password</h2>
        <form onSubmit={handleForgotPassword}>
          <input
            type="tel"
            placeholder="+254712345678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Send Reset Link
          </button>
        </form>

        {message && <p style={{ marginTop: "1rem", color: "green" }}>{message}</p>}

        <p className="auth-links">
          Remembered?{" "}
          <span onClick={() => setView("login")}>Back to Login</span>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
