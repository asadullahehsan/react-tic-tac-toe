/* eslint-disable react/prop-types */

import { Square } from "../square/Square";
import "./Board.css";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export const Board = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>

      {[0, 1, 2].map((rowIndex) => (
        <div key={rowIndex} className="board-row">
          {[0, 1, 2].map((columnIndex) => (
            <Square
              key={`${rowIndex * 3 + columnIndex}`}
              value={squares[rowIndex * 3 + columnIndex]}
              onSquareClick={() => handleClick(rowIndex * 3 + columnIndex)}
            />
          ))}
        </div>
      ))}
    </>
  );
};
