import React, { useEffect, useState } from "react";

function StatusViewer({ socket }) {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    socket.on("receiveStatus", (data) => {
      setStatuses((prev) => [...prev, data]);
    });
  }, [socket]);

  return (
    <div className="status-viewer">
      <h4>Statuses</h4>
      {statuses.map((s, i) => (
        <div key={i}><b>{s.user}:</b> {s.status}</div>
      ))}
    </div>
  );
}

export default StatusViewer;
