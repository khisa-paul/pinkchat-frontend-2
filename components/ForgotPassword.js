import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";
import "./Auth.css";

function ForgotPassword({ setView }) {
  const [phone, setPhone] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/forgot-password`, { phone });
      alert("Password reset instructions sent to your phone.");
      setView("login");
    } catch (err) {
      alert("Request failed: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Reset Password</h2>
        <form onSubmit={handleForgot}>
          <input
            type="tel"
            placeholder="+254712345678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="^\+?[1-9]\d{7,14}$"
            required
          />
          <button type="submit" className="auth-btn">
            Send Reset Link
          </button>
        </form>

        <p className="auth-links">
          Back to <span onClick={() => setView("login")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
