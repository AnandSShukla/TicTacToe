//Quick start by own 
import { useState } from "react";
function Square({value , onSquareClick}){
// const[value, setValue]= useState();

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }
        // const handleClick = () => {
        //     setValue("x");
         
        // };

    return(
         <button className="square" onClick={onSquareClick}>{value}</button>
    // <button className="square" onClick={handleClick}>{value}</button>
    );

    
};
const Tictacv1 = () => {
const [squares, SetSquares]= useState(Array(9).fill("0"));


    
      return (
        <>
          <div>
            <div className="row">
              <Square
                value={squares[0]}
                onSquareClick={handleClick}
              />
              <Square value={squares[1]} />
              <Square value={squares[2]} />
            </div>

            <div className="row">
              <Square value={squares[3]} />
              <Square value={squares[4]} />
              <Square value={squares[5]} />
            </div>

            <div className="row">
              <Square value={squares[6]} />
              <Square value={squares[7]} />
              <Square value={squares[8]} />
            </div>
          </div>
        </>
      );
      };
export default Tictacv1;