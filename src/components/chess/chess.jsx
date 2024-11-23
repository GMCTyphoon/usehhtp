import PropTypes from "prop-types";
import styles from "./chess.module.css";
import { useState } from "react";
import classNames from "classnames";
//map
const chessSize = 8;
const chessSizeArray = new Array(chessSize).fill(0);

export function Chess() {
  const [cellCoords, setCellCoords] = useState({ x: 0, y: 0 });

  const rowClickHandler = ({ x, y }) => {
    console.log(x, y);
    return (event) => {
      setCellCoords({ x, y });
      console.log(`'x:'${x} 'y:'${y}`);
      console.log(event);
    };
  };

  return (
    <div className={styles.container}>
      {chessSizeArray.map((item, colIndex) => (
        <ChessRows
          cellCoords={cellCoords}
          colIndex={colIndex}
          cellClickHandler={rowClickHandler}
          key={colIndex}
        >
          {colIndex}
        </ChessRows>
      ))}
    </div>
  );
}

export const ChessRows = ({ cellClickHandler, cellCoords, colIndex }) => {
  return (
    <div className="строки или столбцы">
      {chessSizeArray.map((item, rowIndex) => (
        <Cell
          colIndex={colIndex}
          rowIndex={rowIndex}
          cellCoords={cellCoords}
          handleClick={cellClickHandler}
          key={rowIndex}
        >
          {rowIndex}
        </Cell>
      ))}
    </div>
  );
};

export const Cell = ({ handleClick, cellCoords, colIndex, rowIndex }) => {
  const isWhite = (colIndex + 1 + (rowIndex + 1)) % 2 === 0;
  const isActive =
    (cellCoords.y === chessSize ? cellCoords.y - 2 : cellCoords.y) ===
      rowIndex && cellCoords.x === colIndex + 1;

  return (
    <div
      className={classNames(styles.cell, {
        [styles.cellWhite]: isWhite,
        [styles.cellActive]: isActive,
      })}
      onClick={handleClick({ x: colIndex + 1, y: rowIndex + 1 })}
    ></div>
  );
};

ChessRows.propTypes = {
  cellClickHandler: PropTypes.func.isRequired,
  cellCoords: PropTypes.object.isRequired,
  colIndex: PropTypes.number.isRequired,
};

Cell.propTypes = {
  handleClick: PropTypes.func.isRequired,
  cellCoords: PropTypes.object.isRequired,
  rowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired,
};
