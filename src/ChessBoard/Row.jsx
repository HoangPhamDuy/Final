import Cell from './Cell.jsx'
import React from "react";
import './Row.css';

const Row =({rowType , size, colorEven,colorOdd })=>{
    const cells = []
    for (let i = 0; i < size; i++) {
        cells.push(i);
    }
    if (rowType == 'even') {
        return (
            <div className="row">
                {
                    cells.map((cell) => {
                        return <Cell key={cell} cellType={cell % 2 == 0 ? 'black' : 'white'} 
                        colorEven={colorEven} colorOdd={colorOdd} flip={cell % 2 == 0 ? 'white' : 'black'} />
                    })
                }
            </div>
        )
    }
    else {
        return (
            <div className="row">
                {
                    cells.map((cell) => {
                        return <Cell key={cell} cellType={cell % 2 == 0 ? 'white' : 'black'} 
                        colorEven={colorEven} colorOdd={colorOdd} flip={cell % 2 == 0 ? 'black' : 'white'} />
                    })
                }
            </div>
        )
    }
}
export default Row;