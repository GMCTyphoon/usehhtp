import { useState } from "react";
import "./App.css";
import Todos from "./components/todos";
import Chess from "./components/chess";

function App() {
  const [showChess, setShowChess] = useState(false);
  const clickHandler = () => {
    setShowChess(true);
  };
  const clickHandlerHideChess = () => {
    setShowChess(false);
  };

  return (
    <>
      <header id="header">
        <div
          style={{
            fontWeight: showChess ? "bold" : "",
            textShadow: showChess ? "1px 1px 2px rgba(0, 0, 0, 0.5)" : "",
          }}
          onClick={clickHandlerHideChess}
        >
          Посты
        </div>
        <div
          style={{
            fontWeight: showChess ? "" : "bold",
            textShadow: showChess ? "" : "1px 1px 2px rgba(0, 0, 0, 0.5)",
          }}
          onClick={clickHandler}
        >
          Шахматная доска
        </div>
      </header>
      {showChess ? (
        <Chess />
      ) : (
        <div>
          <Todos />
        </div>
      )}
    </>
  );
}

export default App;
