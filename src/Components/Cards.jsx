/* eslint-disable react/prop-types */
import React from 'react';
import './Styles/Cards.css';

export default function Cards({ data }) {
  const {
    name, cardNumber, month, year, cvc,
  } = data;

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
        <h1>{cardNumber.match(/.{1,4}/g).join(' ')}</h1>
        <div className="nameAndDate">
          <p>{name}</p>
          <p>{`${month}/${year}`}</p>
        </div>
      </div>
      <div className="back">
        <p className="cvc">{cvc}</p>
      </div>
    </div>
  );
}
