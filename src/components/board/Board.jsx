import React, { Component } from "react";
import Square from "../square/Square";
import classes from "../board/Board.module.scss";

class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player : X";

    return (
      <>
        <div className={classes.status}> {status} </div>
        <div className={classes.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(3)}
        </div>
        <div className={classes.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={classes.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </>
    );
  }
}

export default Board;
