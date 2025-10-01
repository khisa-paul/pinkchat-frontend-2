import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import ChatWindow from "./components/ChatWindow";
import StatusUploader from "./components/StatusUploader";
import StatusViewer from "./components/StatusViewer";
import { API_BASE } from "./config";
import io from "socket.io-client";

// Connect socket.io to backend
const socket = io(API_BASE, { transports: ["websocket"], withCredentials: true });

function App() {
  const [user, setUser] = useState(null); // null = not logged in
  const [view, setView] = useState("login"); // login | register | forgot | chat

  if (!user) {
    return (
      <div className="auth-container">
        {view === "login" && <Login setUser={setUser} setView={setView} />}
        {view === "register" && <Register setUser={setUser} setView={setView} />}
        {view === "forgot" && <ForgotPassword setView={setView} />}
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">💖 PinkChat</header>
      <div className="main">
        <ChatWindow socket={socket} currentUser={user} />
        <aside>
          <StatusUploader socket={socket} currentUser={user} />
          <StatusViewer socket={socket} />
        </aside>
      </div>
    </div>
  );
}

export default App;
