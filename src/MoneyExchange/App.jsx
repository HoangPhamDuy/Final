import './AppMoneyE.css'
import { useState } from 'react';

function MoneyExchange() {

  const[amount, setAmount] = useState(0);
  const [isUsdToVnd, setIsUsdToVnd] = useState(true);

  const handleInputChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSwapClick = () => {
    setIsUsdToVnd((prevIsUsdToVnd) => !prevIsUsdToVnd);
  };

  const convertCurrency = () => {   
    if (isUsdToVnd) {
      return amount * 23000; // Giả sử tỷ giá là 1 USD = 23000 VND
    } else {
      return amount / 23000; // Đảo ngược tỷ giá để chuyển từ VND sang USD
    }
  };

  return (
    <div>
      <input className='inputMX' style={{padding : '10px', marginRight: '10px'}} type="number" value={amount} onChange={handleInputChange} />
      <button onClick={handleSwapClick}>Swap</button>
      <h1>
        {isUsdToVnd ? `${amount} USD => ${convertCurrency()} VND` : `${amount} VND => ${convertCurrency()} USD`}
      </h1>
    </div>
  );
}

export default MoneyExchange
