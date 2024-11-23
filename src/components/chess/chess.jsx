import PropTypes from "prop-types";
import styles from "./chess.module.css";
import { useState } from "react";
import classNames from "classnames";
//map
const chessSize = 8;
const chessSizeArray = new Array(chessSize).fill(0);

export function Chess() {
  const [cellCoords, setCellCoords] = useState({ x: 0, y: 0 });

  const rowClickHandler = (rowIndex, colIndex) => {
    setCellCoords({ x: rowIndex + 1, y: colIndex + 1 });
    console.log(`'x:'${rowIndex + 1} 'y:'${colIndex + 1}`);
  };

  return (
    <div className={styles.container}>
      {chessSizeArray.map((item, colIndex) => (
        <ChessRows
          cellCoords={cellCoords}
          colIndex={colIndex}
          cellClickHandler={(rowIndex) => {
            rowClickHandler(rowIndex, colIndex);
          }}
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
          onClick={() => {
            cellClickHandler(rowIndex);
          }}
          key={rowIndex}
        >
          {rowIndex}
        </Cell>
      ))}
    </div>
  );
};

export const Cell = ({ onClick, cellCoords, colIndex, rowIndex }) => {
  const isWhite = (colIndex + 1 + (rowIndex + 1)) % 2 === 0;
  const isActive =
    (cellCoords.x === chessSize ? cellCoords.x - 2 : cellCoords.x) ===
      rowIndex && cellCoords.y === colIndex + 1;

  return (
    <div
      className={classNames(styles.cell, {
        [styles.cellWhite]: isWhite,
        [styles.cellActive]: isActive,
      })}
      onClick={onClick}
    ></div>
  );
};

ChessRows.propTypes = {
  cellClickHandler: PropTypes.func.isRequired,
  cellCoords: PropTypes.object.isRequired,
  colIndex: PropTypes.number.isRequired,
};

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  cellCoords: PropTypes.object.isRequired,
  rowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired,
};
