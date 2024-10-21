import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./../App.css";

export default function Header({ amount, onAmountChange }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleAmountChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) || value === "") {
      const parsedAmount = value === "" ? "" : parseFloat(value);
      onAmountChange(parsedAmount); 
    }
  };

  const inputWidth = `${Math.min(Math.max(amount.toString().length * 20 + 20, 100), 400)}px`;


  useEffect(() => {
    setShowMessage(true);
  }, []);

  const handleNavClick = () => {
    setShowMessage(false);
  };

  return (
    <div>
      {showMessage && (
        <div className="alert alert-danger" role="alert" style={{ padding: "0 50px 0 50px" }}>
          Please select the navigation for better UI and if you want to change the graph line then you have to change the amount at the top. 
        </div>
      )}
      <div className="mt-2 ms-3">
        <div className="pt-3 px-3">
          <div className="text-start">
            <div className="amount-usd d-flex align-items-center">
              <h1>
                <input
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  className="amount-input me-2"
                  style={{
                    border: "none",
                    width: inputWidth,
                    marginRight: '0',
                  }}
                />
              </h1>
              <h3 className="text-secondary">USD</h3>
            </div>
          </div>
          <p className="text-success ">+2,161.42 (3.54%)</p>
        </div>
        <div className="pt-3 px-3">
          <nav className="justify-content-center justify-content-md-start">
            <ul className="nav nav-underline">
              <li className="nav-item">
                <a className="nav-link" onClick={handleNavClick}>
                  <NavLink to="/summary" className="nav-link-custom">Summary</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleNavClick}>
                  <NavLink to="/chart" className="nav-link-custom">Chart</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleNavClick}>
                  <NavLink to="/statistics" className="nav-link-custom">Statistics</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleNavClick}>
                  <NavLink to="/analysis" className="nav-link-custom">Analysis</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleNavClick}>
                  <NavLink to="/setting" className="nav-link-custom">Setting</NavLink>
                </a>
              </li>
            </ul>
          </nav>
          <hr />
        </div>
      </div>
    </div>
  );
}
