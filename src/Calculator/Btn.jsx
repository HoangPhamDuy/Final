// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line react/prop-types
function Btn({onClick, children}){
    return (
        <button onClick={onClick} className="calc-btn">{children}</button>
    )
}

export default Btn;