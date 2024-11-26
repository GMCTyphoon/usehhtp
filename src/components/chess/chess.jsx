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
  return (
    <div>
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
  const isRightCol = colIndex === 7;
  const isTopRow = rowIndex === 0;
  const isBotRow = rowIndex === 7;

  function getEnglishAlphabetLetter(number) {
    if (number < 1 || number > 26) {
      return "Invalid number";
    }
    return String.fromCharCode(64 + number); // ASCII код 'A' = 65
  }

  let nameRows;
  if (rowIndex === 0 || rowIndex === 7) {
    nameRows = getEnglishAlphabetLetter(colIndex + 1);
  }

  let nameCols = isLeftCol || isRightCol ? chessSize - rowIndex : nameRows;

  return (
    <div
      data-number={nameCols}
      data-char={nameRows}
      className={classNames(styles.cell, {
        [styles.cellWhite]: isWhite,
        [styles.cellActive]: isActive,
        [styles.nameLeftCol]: isLeftCol,
        [styles.nameRightCol]: isRightCol,
        [styles.nameTopRow]: isTopRow,
        [styles.nameBotRow]: isBotRow,
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
