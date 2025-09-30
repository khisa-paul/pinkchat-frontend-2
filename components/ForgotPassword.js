import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";

function ForgotPassword({ setView }) {
  const [phone, setPhone] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/api/forgot-password`, { phone });
      alert("Check your phone/email for reset instructions");
      setView("login");
    } catch (err) {
      alert(err.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div className="forgot">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgot}>
        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit">Reset Password</button>
      </form>
      <button onClick={() => setView("login")}>Back to Login</button>
    </div>
  );
}

export default ForgotPassword;
