import React, { useState } from 'react';
import './hello.css'
const HelloWorld = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='app'>
      <div className="HelloWorld">
        <h1 className="title">Máy tính tuổi thông minh!!!</h1>
        <label className="label">Hãy nhập số tuổi của bạn</label>
        <input
          className="inputValue"
          type="number"
          value={inputValue}
          onChange={handleChange}
        />
        <h1 className="result">
          {inputValue <= 10 ? `Bạn mới ${inputValue} tuổi thôi!!` : `Bạn đã ${inputValue} tuổi rồi!!`}
        </h1>
      </div>
    </div>
  );
}

export default HelloWorld;
