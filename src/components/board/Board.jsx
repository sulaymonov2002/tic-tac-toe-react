import React from "react";
import Square from "../square/Square";

const Board = ({ squares, onclick }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onclick(i)} />
    ))}
  </div>
);

export default Board;
