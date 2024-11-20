import { useState } from "react";
import "./App.css";
import PostTodo from "./components/post";
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
      <div id="button">
        <button onClick={clickHandlerHideChess}>Посты</button>
        <button onClick={clickHandler}>Шахматная доска</button>
      </div>
      {showChess ? (
        <Chess />
      ) : (
        <div>
          <PostTodo />
          <Todos />
        </div>
      )}
    </>
  );
}

export default App;
