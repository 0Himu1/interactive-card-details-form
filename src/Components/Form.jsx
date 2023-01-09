/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Styles/Form.css';

export default function Form({ changeHandler }) {
  return (
    <form>
      <div className="input">
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input type="text" onChange={changeHandler} />
      </div>
      <div className="input">
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input type="text" />
      </div>
      <div className="split">
        <div className="input">
          <label htmlFor="name">EXP. DATE (MM/YY)</label>
          <div className="split">
            <input type="text" />
            <input type="text" />
          </div>
        </div>
        <div className="input">
          <label htmlFor="cardNumber">CVC</label>
          <input type="text" />
        </div>
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
}
