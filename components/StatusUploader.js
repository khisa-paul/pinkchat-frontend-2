import React, { useState } from "react";

function StatusUploader({ socket, currentUser }) {
  const [status, setStatus] = useState("");

  const postStatus = () => {
    if (!status) return;
    socket.emit("postStatus", { user: currentUser.username || currentUser.phone, status });
    setStatus("");
  };

  return (
    <div className="status-uploader">
      <h4>Post Status</h4>
      <input value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Write status..." />
      <button onClick={postStatus}>Post</button>
    </div>
  );
}

export default StatusUploader;
