import React, { useState, useEffect } from "react";

const currentNotification = {
  title: "🚨 Important Update",
  message: "GRR Installation will be held on July 13, 2025. Join us live at 10 AM!",
  show: true,
};

const NotificationModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (currentNotification.show) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-xl shadow-lg w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-2">{currentNotification.title}</h2>
        <p className="text-sm mb-4">{currentNotification.message}</p>
        <div className="text-right">
          <button
            onClick={() => setIsVisible(false)}
            className="px-4 py-1 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
