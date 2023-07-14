import { useState } from 'react'
import './AppChessBoard.css'
import ChessBoard from './ChessBoard.jsx'

const Chess = ()=>{
    const [size,setSize] = useState(8); // ban co co dang size * size;
    const [colorEven, setColorEven] = useState('#000000');
    const [colorOdd, setColorOdd] = useState('#FAEBD7');
    const [flip, setFlip] = useState(0);
    const setFlipHandler = () =>{
        setFlip(!flip);
        if (flip){
            setColorEven(colorOdd);
            setColorOdd(colorEven);
        }
        else{
            setColorEven(colorEven);
            setColorOdd(colorOdd);
        }
    }
    return(
        <>
            <div className='App'>
                <div className='lable'>
                    SetSize <input type='number' style={{ paddingLeft: '10px', marginRight: '10px', height: '30px', fontSize: '16px', borderRadius: '10px' }} value={size} onChange={(e)=>setSize(e.target.value)}/>  
                    <label>Ô Lẻ</label>
                    <input type='color' value={colorEven} onChange={(e) => setColorEven(e.target.value)} />
                    <label>Ô Chẵn</label>
                    <input type='color' value={colorOdd} onChange={(e) => setColorOdd(e.target.value)} />
                    <button className='btn-flip' type='button' onClick={setFlipHandler}>Filp</button>
                </div>
                
                <ChessBoard size={size} colorEven={colorEven} colorOdd={colorOdd}/>
            </div>
        </>
    )

}
export default Chess;