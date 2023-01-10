/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './Components/Cards';
import FinishPage from './Components/FinishPage';
import Form from './Components/Form';

function validateName(name) {
  const regex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
  return regex.test(name);
}

function validateCardNumber(cardNumber) {
  const regex = /^[0-9]{0,16}$/;
  return regex.test(cardNumber);
}
function validateDate(date) {
  const regex = /^[0-9]{0,2}$/;
  return regex.test(date);
}
function validateCvc(cvc) {
  const regex = /^[0-9]{0,3}$/;
  return regex.test(cvc);
}

function App() {
  const validatity = {
    name: true,
    cardNumber: true,
    month: true,
    year: true,
    cvc: true,
  };
  const state = {
    name: 'Jhon Doe',
    cardNumber: '0000000000000000',
    month: '00',
    year: '00',
    cvc: '010',
  };
  const [validation, setvalidation] = useState(validatity);
  const [data, setData] = useState(state);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    const currentValiidation = validation;
    const updatedValidationFalse = {
      ...currentValiidation,
      [name]: false,
    };
    const updatedValidationTrue = {
      ...currentValiidation,
      [name]: true,
    };

    const currentData = data;
    const updatedData = {
      ...currentData,
      [name]: value,
    };

    if (name === 'name' && validateName(value)) {
      setData(updatedData);
      setvalidation(updatedValidationTrue);
    } else if (name === 'cardNumber' && validateCardNumber(value)) {
      setData(updatedData);
      setvalidation(updatedValidationTrue);
    } else if ((name === 'month' || name === 'year') && validateDate(value)) {
      setData(updatedData);
      setvalidation(updatedValidationTrue);
    } else if (name === 'cvc' && validateCvc(value)) {
      setData(updatedData);
      setvalidation(updatedValidationTrue);
    } else {
      setvalidation(updatedValidationFalse);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Cards data={data} />
        <BrowserRouter>
          <Routes>
            <Route
              path="finish"
              element={

                <FinishPage />
              }
            />
            <Route
              path="/"
              element={

                <Form changeHandler={changeHandler} validation={validation} />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
