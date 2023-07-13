// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');  
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons1">
        <button className='clear' onClick={handleClear}>C</button>
        <button onClick={() => handleClick('*')}>*</button>
      </div>
      <div className="buttons1">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className='dive' onClick={() => handleClick('/')}>/</button>
      </div>
      <div className="buttons2">
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
      </div>
      <div className="buttons3">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
      <div className="buttons4">
        <button className='zero' onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
