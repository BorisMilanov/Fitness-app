import React, { useState } from 'react';

const HourDropdown = () => {
  const [selectedHour, setSelectedHour] = useState(null);
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="hour-dropdown">
      <select onChange={(e) => setSelectedHour(e.target.value)} value={selectedHour || ""}>
        <option value="" disabled>Select Hour</option>
        {hours.map(hour => (
          <option key={hour} value={hour}>{hour}</option>
        ))}
      </select>
    </div>
  );
};

const MinuteDropdown = () => {
  const [selectedMinute, setSelectedMinute] = useState(null);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className="minute-dropdown">
      <select onChange={(e) => setSelectedMinute(e.target.value)} value={selectedMinute || ""}>
        <option value="" disabled>Select Minute</option>
        {minutes.map(minute => (
          <option key={minute} value={minute}>{minute}</option>
        ))}
      </select>
    </div>
  );
};

export { HourDropdown, MinuteDropdown };
