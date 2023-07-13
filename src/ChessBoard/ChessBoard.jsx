import React from 'react';
import Row from './Row.jsx';
const ChessBoard = ({ size, colorEven, colorOdd }) => {
    const rows = [];
    for (let i = 0; i < size; i++) {
        rows.push(i);
    }
    return (
        <div className="ChessBoard" style={{ marginTop: "20px" }}>
            {
                rows.map(
                    (row, idx) => {
                        return <Row key={idx} size={size} rowType={idx % 2 === 0 ? 'even' : 'odd'} colorEven={colorEven} colorOdd={colorOdd} />
                    }
                )
            }
        </div>
    )
}

export default ChessBoard;