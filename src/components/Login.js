import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ phone: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${form.phone}`);
    // TODO: Replace with API call
  };

  return (
    <div style={{ background: "pink", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleSubmit} style={{ background: "white", padding: "20px", borderRadius: "10px", width: "300px" }}>
        <h2 style={{ textAlign: "center", color: "deeppink" }}>PinkChat Login</h2>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "5px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "5px" }}
        />
        <button type="submit" style={{ width: "100%", padding: "10px", background: "deeppink", color: "white", border: "none", borderRadius: "5px" }}>
          Login
        </button>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          <span onClick={() => navigate("/register")} style={{ color: "blue", cursor: "pointer" }}>Register</span> |{" "}
          <span onClick={() => navigate("/forgot-password")} style={{ color: "blue", cursor: "pointer" }}>Forgot Password?</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
