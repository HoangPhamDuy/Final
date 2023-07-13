import React from 'react';
import './Cell.css';
const Cell = ({ cellType, colorOdd, colorEven }) => {
    const styleObj = {
        backgroundColor: cellType === 'white' ? colorOdd : colorEven,
    }
    return(
        <>
            <div className={`Cell`} style={styleObj}></div>
        </>
    )
}
export default Cell;