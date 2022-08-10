import React, { Component } from 'react'
import Board from '../board/Board';

import classes from "../game/Game.module.scss";

 class Game extends Component {
   render() {
     return (
       <div className={classes.game}>
         <div className={classes.gameBoard}>
           <Board />
         </div>
         <div className={classes.gameInfo}>
           <div>{/* status */}</div>
           <ol>{/* TODO */}</ol>
         </div>
       </div>
     );
   }
 }

export default Game;