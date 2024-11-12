import React, { useState } from 'react';
import notificationsData from './notifications';
import NotificationItem from './NotificationItem';
import './App.css';

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

 
  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="app">
      <h2>Notifications! ({notifications.length})</h2>
      <button onClick={clearAllNotifications}>Delete all</button>
      <div className="notifications-list">
        {notifications.map(notification => (
          <NotificationItem 
            key={notification.id} 
            notification={notification} 
            onClear={clearNotification} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;