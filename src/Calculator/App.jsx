// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
// eslint-disable-next-line no-unused-vars
import Btn from './Btn';
// eslint-disable-next-line no-unused-vars
import Input from './Input';
import './App.css'

function APPCalculator() {  
  // const [input,setInput] = useState("");
  // // eslint-disable-next-line no-unused-vars
  // const [previousNumber,setPreviousNumber] = useState("");
  // // eslint-disable-next-line no-unused-vars
  // const [currentNumber,setCurrentNumber] = useState("");
  // // eslint-disable-next-line no-unused-vars
  // const [operator,setOperator] = useState("");
  // // eslint-disable-next-line no-unused-vars
  // const addToInput = (val) =>setInput(input + val);
  // // eslint-disable-next-line no-unused-vars
  // const clearInput =() =>setInput("");
  // // eslint-disable-next-line no-unused-vars
  // const addDecimal = (val)=>{
  //   if(input.indexOf(".")===1){
  //     setInput(input+ val);
  //   }
  // };
  // // eslint-disable-next-line no-unused-vars
  // const addZeroToInput = (val) =>{
  //   if(input !== ""){
  //     setInput(input + val);
  //   }
  // };
  // // eslint-disable-next-line no-unused-vars
  // const add =()=>{
  //   setPreviousNumber(input);
  //   setOperator("plus");
  //   setInput("");
  // }
  // // eslint-disable-next-line no-unused-vars
  // const subtract = () => {
  //   setPreviousNumber(input);
  //   setOperator("subtract");
  //   setInput("");
  // };
  // // eslint-disable-next-line no-unused-vars
  // const multiply = () => {
  //   setPreviousNumber(input);
  //   setOperator("multiply");
  //   setInput("");
  //   };
    
  //    // eslint-disable-next-line no-unused-vars
  //    const divide = () => {
  //     setPreviousNumber(input);
  //     setOperator("divide");
  //     setInput("");
  //    };
    
  //    // eslint-disable-next-line no-unused-vars
  //    const evaluate = () => {
  //     setCurrentNumber(input);
  //     if (operator === "plus") {
  //      setInput(parseInt(previousNumber) + parseInt(currentNumber));
  //     } else if (operator === "subtract") {
  //      setInput(parseInt(previousNumber) - parseInt(currentNumber));
  //     } else if (operator === "multiply") {
  //      setInput(parseInt(previousNumber) * parseInt(currentNumber));
  //     } else if (operator === "divide") {
  //      setInput(parseInt(previousNumber) / parseInt(currentNumber));
  //     }
  //    };
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
    <>
    <div className='App'>
      <div className='calculator'> 
        <Input input={display} />
        <div className='button'>
          <div className="rows" >
            <Btn onClick={handleClear}>C</Btn>
            <Btn onClick={() => handleClick('/')}>/</Btn>
          </div>
          <div className="rows">
            <Btn onClick={() => handleClick('7')}>7</Btn>
            <Btn onClick={() => handleClick('8')}>8</Btn>
            <Btn onClick={() => handleClick('9')}>9</Btn>
            <Btn onClick={() => handleClick('*')}>*</Btn>
          </div>
          <div className="rows">
            <Btn onClick={() => handleClick('4')}>4</Btn>
            <Btn onClick={() => handleClick('5')}>5</Btn>
            <Btn onClick={() => handleClick('6')}>6</Btn>
            <Btn onClick={() => handleClick('-')}>-</Btn>
          </div>
          <div className="rows">
            <Btn onClick={() => handleClick('1')}>1</Btn>
            <Btn onClick={() => handleClick('2')}>2</Btn>
            <Btn onClick={() => handleClick('3')}>3</Btn>
            <Btn onClick={() => handleClick('+')}>+</Btn>
          </div>
          <div className="rows">
            <Btn onClick={() => handleClick(".")}>.</Btn>
            <Btn onClick={() => handleClick('0')}>0</Btn>
            <Btn onClick={calculateResult}>=</Btn>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default APPCalculator
