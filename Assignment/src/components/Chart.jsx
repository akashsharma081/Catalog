import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Chart() {
  const { amount } = useOutletContext(); 
  const [activeNav, setActiveNav] = useState("1d"); 
  const dayCount = ["1d", "3d", "1w", "1m", "6m", "1y", "max"];
  const DataMap = {
    "1d": { labels: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"], data: [10, 15, 20, 25, 30, amount] },
    "3d": { labels: ["Day 1", "Day 2", "Day 3"], data: [50, 60, amount] },
    "1w": { labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], data: [100, 120, 140, 160, 180, 200, amount] },
    "1m": { labels: ["Week 1", "Week 2", "Week 3", "Week 4"], data: [300, 320, 340, amount] },
    "6m": { labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"], data: [400, 450, 500, 550, 600, amount] },
    "1y": { labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], data: [700, 750, 800, 850, 900, 950, amount] },
    "max": { labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"], data: [1000, 1200, 1400, 1600, amount] }
  };

  const handleNavClick = (item) => {
    setActiveNav(item); 
  };

  const data = {
    labels: DataMap[activeNav].labels, 
    datasets: [
      {
        label: `Data for ${activeNav}`, 
        data: DataMap[activeNav].data, 
        backgroundColor: "transparent",
        borderColor: "blue",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };

  return (
    <div style={{ padding: "0 30px 0 30px" }}>
      <div className="px-3 d-flex flex-wrap justify-content-between align-items-center switchdate">
        <div className="text-options">
          <span className="me-3">
            <i className="bi bi-arrows-angle-expand mx-1" /> Fullscreen
          </span>
          <span>
            <i className="bi bi-plus-circle mx-1" /> Compare
          </span>
        </div>
        <div>
          <ul className="nav nav-pills">
            {dayCount.map((item) => (
              <li className="nav-item" key={item}>
                <a 
                  className={`nav-link ${activeNav === item ? 'active' : ''}`} 
                  href="#" 
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-2" style={{ width: "800px", height: "400px" }}>
        <Line data={data}></Line>
      </div>
    </div>
  );
}
