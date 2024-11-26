import PropTypes from "prop-types";
import styles from "./chess.module.css";
import { useState } from "react";
import classNames from "classnames";
//map
const chessSize = 10;
const chessSizeArray = new Array(chessSize).fill(0);
const chessChars = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
};

export function Chess() {
  const [cellCoords, setCellCoords] = useState({ x: 0, y: 0 });

  const rowClickHandler = ({ x, y }) => {
    return () => {
      setCellCoords({ x, y });
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
  let nameCols = chessChars[colIndex + 1];
  return (
    <div
      data-char={nameCols}
      className={classNames(styles.nameTopRow, styles.nameBotRow)}
    >
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

  const isLeftCol = colIndex === 0;
  const isRightCol = colIndex === chessSizeArray.length - 1;

  let nameRows = isLeftCol || isRightCol ? chessSize - rowIndex : undefined;

  return (
    <div
      data-number={nameRows}
      className={classNames(styles.cell, {
        [styles.cellWhite]: isWhite,
        [styles.cellActive]: isActive,
        [styles.nameLeftCol]: colIndex === 0,
        [styles.nameRightCol]: colIndex === chessSizeArray.length - 1,
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
