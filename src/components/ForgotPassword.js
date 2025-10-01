import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reset link sent to phone: ${phone}`);
    // TODO: Replace with API call to backend
  };

  return (
    <div style={{ background: "pink", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleSubmit} style={{ background: "white", padding: "20px", borderRadius: "10px", width: "300px" }}>
        <h2 style={{ textAlign: "center", color: "deeppink" }}>Forgot Password</h2>
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "5px" }}
        />
        <button type="submit" style={{ width: "100%", padding: "10px", background: "deeppink", color: "white", border: "none", borderRadius: "5px" }}>
          Send Reset Link
        </button>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          <span onClick={() => navigate("/")} style={{ color: "blue", cursor: "pointer" }}>Back to Login</span>
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword;
