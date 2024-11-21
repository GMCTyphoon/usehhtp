import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./header.module.css";

export default function Header({ onDataFromHeader }) {
  const [showChess, setShowChess] = useState("posts");

  const clickHandler = () => {
    setShowChess("chess");
    onDataFromHeader(showChess);
  };
  const clickHandlerHideChess = () => {
    setShowChess("posts");
    onDataFromHeader(showChess);
  };
  useEffect(() => {
    if (showChess) {
      onDataFromHeader(showChess);
    }
  }, [onDataFromHeader, showChess]);


  return (
    <header className={styles.header} id="header">
      <div
        style={{
          fontWeight: showChess === "chess" ? "bold" : "",
          textShadow:
            showChess === "chess" ? "1px 1px 2px rgba(0, 0, 0, 0.5)" : "",
        }}
        onClick={clickHandlerHideChess}
      >
        Посты
      </div>
      <div
        style={{
          fontWeight: showChess === "posts" ? "bold" : "",
          textShadow:
            showChess === "posts" ? "1px 1px 2px rgba(0, 0, 0, 0.5)" : "",
        }}
        onClick={clickHandler}
      >
        Шахматная доска
      </div>
    </header>
  );
}
Header.propTypes = {
  onDataFromHeader: PropTypes.func.isRequired,
};
