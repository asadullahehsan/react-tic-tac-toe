/* eslint-disable react/prop-types */
import "./Square.css";

export const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
