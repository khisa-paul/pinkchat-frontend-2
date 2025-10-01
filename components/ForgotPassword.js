import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";

function ForgotPasswordPage() {
  const [phone, setPhone] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/forgot-password`, { phone });
      alert("Password reset link sent to your phone number!");
    } catch (err) {
      alert("Failed: " + err.message);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
      <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
        Forgot Password
      </h2>
      <form onSubmit={handleForgot} className="space-y-4">
        <input
          type="tel"
          placeholder="Enter your phone number"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700"
        >
          Send Reset Link
        </button>
      </form>

      <p className="text-center mt-4">
        Remembered?{" "}
        <a href="/" className="text-pink-600 hover:underline">
          Back to Login
        </a>
      </p>
    </div>
  );
}

export default ForgotPasswordPage;
