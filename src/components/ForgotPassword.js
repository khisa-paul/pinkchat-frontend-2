import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../../config";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgot = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API_BASE}/forgot-password`, { phone });
      alert("Password reset link sent to your phone number!");
      navigate("/"); // redirect to login
    } catch (err) {
      alert("Failed: " + (err.response?.data?.message || err.message));
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-96 mx-auto mt-20">
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
          className={`w-full py-2 rounded-xl text-white ${
            loading ? "bg-pink-400" : "bg-pink-600 hover:bg-pink-700"
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}
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

export default ForgotPassword;
