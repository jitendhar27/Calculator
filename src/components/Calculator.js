import React from 'react'
import { useState } from 'react';
export default function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input));
      
    }catch{
      setInput('Error');
    }
  };
  return (
    <body>
    <div className='container'>
      <h3 align="center" className='container'>Simple Calculator</h3>
      <textarea className="container" align="center" rows={5} cols={5} value={input} readOnly></textarea>
      <br />
      <div className='btn-wrapper'>
      <div className="button-container">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
      <div className="button-container">
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
      </div>
      <div className="button-container">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
      </div>
      <div className="button-container">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
      </div>
    </div>
    </body>
  )
}
