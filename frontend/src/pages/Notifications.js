import React, { useState, useEffect } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const savedNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
    setNotifications(savedNotifications);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Notifications</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        {notifications.map((notification, index) => (
          <div key={index} className="mb-6 border p-4 rounded-lg">
            <p>{notification.message}</p>
            <p className="text-sm text-gray-500">{new Date(notification.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;