import React, { useState } from 'react';
import './hello.css';
import { Space,Typography } from 'antd';
const {  Text } = Typography;

const HelloWorld = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (isNaN(inputValue)) {
      setErrorMsg('Vui lòng điền đúng định dạng Number!!!');
      setResult('');
    } else {
      setErrorMsg('');
      if(inputValue<=15){
        setResult(`Bạn mới ${inputValue} tuổi thôi!!!`);
      }else if(inputValue<=130 && inputValue>15){
        setResult(`Bạn đã ${inputValue} tuổi rồi!!!`);
      }else if(inputValue >130 ){
        setResult(`Làm gì có ai sông lâu như thế !!!`);
      }
    }
  };

  return (
    <div className='app'>
      <div  className='HelloWorld'>
        <h1 className='title'>Máy tính tuổi thông minh!!!</h1>
        <label className='label'>Hãy nhập số tuổi của bạn</label>
        <Space>
          <input
            className='inputValue'
            type='text'
            value={inputValue}
            onChange={handleChange}
            placeholder='Mời nhập độ tuổi!'
          />
          <button className='btn-helloWorld' style={{marginBottom:'12px'}} onClick={handleClick}>OK</button>
        </Space>
      </div>
      <div className='result'>
        {errorMsg && <Text style={{fontSize:28 , fontWeight:400}}>{errorMsg}</Text>}
        {result && <Text style={{fontSize:28,marginLeft:40,fontWeight:400}}>{result}</Text>}
      </div>
    </div>
  );
};

export default HelloWorld;