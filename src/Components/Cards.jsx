import React from 'react';
import './Styles/Cards.css';

export default function Cards() {
  return (
    <div className="cardBox">
      <div className="front">
        <div className="img">
          <svg
            width="84"
            height="47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
            <path
              d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
              stroke="#fff"
            />
          </svg>
        </div>
        <h1>1234 5678 9012 4321</h1>
        <div className="nameAndDate">
          <p>Himu Nazmul</p>
          <p>09/00</p>
        </div>
      </div>
      <div className="back">
        <p className="cvc">012</p>
      </div>
    </div>
  );
}
