/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Form.css';

export default function Form({ changeHandler, validation }) {
  const {
    name, cardNumber, month, year, cvc,
  } = validation;
  return (
    <form>
      <div className="input">
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input type="text" onChange={changeHandler} name="name" />
        <p className={name ? 'valid' : 'notValid'}>Wrong format</p>
      </div>
      <div className="input">
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input
          inputMode="numeric"
          type="number"
          onChange={changeHandler}
          name="cardNumber"
        />
        <p className={cardNumber ? 'valid' : 'notValid'}>Wrong format</p>
      </div>
      <div className="split">
        <div className="input">
          <label htmlFor="name">EXP. DATE (MM/YY)</label>
          <div className="split">
            <input
              inputMode="numeric"
              type="number"
              onChange={changeHandler}
              name="month"
            />
            <p className={month ? 'valid' : 'notValid'}>Wrong format</p>
            <input
              inputMode="numeric"
              type="number"
              onChange={changeHandler}
              name="year"
            />
            <p className={year ? 'valid' : 'notValid'}>Wrong format</p>
          </div>
        </div>
        <div className="input">
          <label htmlFor="cardNumber">CVC</label>
          <input
            inputMode="numeric"
            type="number"
            onChange={changeHandler}
            name="cvc"
          />
          <p className={cvc ? 'valid' : 'notValid'}>Wrong format</p>
        </div>
      </div>
      <Link to="/finish">
        <button type="submit">Confirm</button>
      </Link>
    </form>
  );
}
