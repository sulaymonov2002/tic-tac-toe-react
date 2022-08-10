import React, { Component } from "react";
import classes from "../square/Square.module.scss";

class Square extends Component {
  render() {
    return (
      <button
        className={classes.square}
        onClick={() => {
          console.log("click");
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;
