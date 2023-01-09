/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Cards from './Components/Cards';
import Form from './Components/Form';

function App() {
  const state = {
    name: '',
    cardNumber: '',
    date: {
      month: '',
      year: '',
    },
    cvc: '',
  };

  const [data, setData] = useState(state);

  const changeHandler = (e) => {
    const currentData = data;
    const updatedData = {
      ...currentData,
      name: e.target.value,
    };
    setData(updatedData);
  };

  return (
    <div className="App">
      <div className="container">
        <Cards data={data} />
        <Form changeHandler={changeHandler} />
      </div>
    </div>
  );
}

export default App;
