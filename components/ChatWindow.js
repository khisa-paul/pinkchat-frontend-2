import React, { useEffect, useState } from "react";

function ChatWindow({ socket, currentUser }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, [socket]);

  const sendMessage = () => {
    if (!message) return;
    const data = { user: currentUser.username || currentUser.phone, text: message };
    socket.emit("sendMessage", data);
    setMessage("");
  };

  return (
    <div className="chat-window">
      <h3>Chat</h3>
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i}><b>{m.user}:</b> {m.text}</div>
        ))}
      </div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatWindow;
