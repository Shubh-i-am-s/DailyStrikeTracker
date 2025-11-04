import React, { useState, useEffect } from "react";
import "./DailyStrikeGrid.css";

function DailyStrikeGrid() {
  const currentDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [streakDays, setStreakDays] = useState([]);

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  useEffect(() => {
    const year = currentDate.getFullYear();
    const totalDays = getDaysInMonth(year, selectedMonth);
    setDaysInMonth(totalDays);
    const randomDays = Array.from(
      { length: Math.floor(Math.random() * 15) + 5 },
      () => Math.floor(Math.random() * totalDays) + 1
    );
    setStreakDays(randomDays);
  }, [selectedMonth]);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="strike-container">
      <h2>🔥 Daily Strike Tracker</h2>
      <select value={selectedMonth} onChange={(e) => setSelectedMonth(+e.target.value)}>
        {months.map((m, i) => (
          <option key={i} value={i}>{m}</option>
        ))}
      </select>

      <div className="strike-grid">
        {[...Array(daysInMonth)].map((_, i) => (
          <div key={i} className="day-box">
            {i + 1} {streakDays.includes(i + 1) ? "🔥" : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyStrikeGrid;
