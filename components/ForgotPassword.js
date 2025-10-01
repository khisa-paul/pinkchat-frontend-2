import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";

function ForgotPassword({ setView }) {
  const [phone, setPhone] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/forgot-password`, { phone });
      alert("Password reset link sent via SMS (if registered).");
      setView("login");
    } catch (err) {
      alert("Failed: " + err.message);
    }
  };

  return (
    <div className="forgot-form">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgot}>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p>
        <button type="button" onClick={() => setView("login")}>
          Back to Login
        </button>
      </p>
    </div>
  );
}

export default ForgotPassword;
