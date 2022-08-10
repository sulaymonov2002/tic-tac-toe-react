import React from "react";

const Square = ({ value, onclick }) => {
  const style = value ? ` squares ${value}` : `squares`;

  return (
    <button className={style} onClick={onclick}>
      {value}
    </button>
  );
};

export default Square;
