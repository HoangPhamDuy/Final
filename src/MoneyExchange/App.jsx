import './AppMoneyE.css'
import { useState } from 'react';
import { Space } from 'antd';

function MoneyExchange() {

  const [inputValue, setInputValue] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('VN');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

    const handleFromCurrency = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrency = (e) => {
    setToCurrency(e.target.value);
  };
    const handleConversion = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult('Vui lòng nhập giá trị hợp lệ!!!');
    } else {
      const rates = {
        USD: 1,
        VN: 23000,
        EURO: 0.85
      };
      const fromRate = rates[fromCurrency];
      const toRate = rates[toCurrency];
      const convertedValue = value / fromRate * toRate;
      // lam tron 3 so cuoi
      setResult(`${value} ${fromCurrency} = ${convertedValue.toFixed(3)} ${toCurrency}`);
    }
  };
  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  }


  return (
    <div>
      <Space className='AppMoneyExchange'>
          <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Nhập số tiền cần đổi' />
          <h2>From</h2>
          <select value={fromCurrency} onChange={handleFromCurrency}>
            <option value='USD'>USD</option>
            <option value='VN'>VN</option>
            <option value='EURO'>EURO</option>
          </select>
          <h2>To</h2>
          <select value={toCurrency} onChange={handleToCurrency}>
            <option value='USD'>USD</option>
            <option value='VN'>VN</option>
            <option value='EURO'>EURO</option>
          </select>
          <button className='btn-MoneyExchange' onClick={handleConversion}>Đổi tiền</button>
          <button className='btn-MoneyExchange' onClick={handleSwap}>Swap</button>
      </Space>
      {result && <h2>{result}</h2>}
    </div>
  );
}

export default MoneyExchange
