import "./App.css";
import Todos from "./components/posts/todos";
import Chess from "./components/chess/chess";
import { useState } from "react";
import Header from "./components/header/header";

function App() {
  const [selectedTab, setSelectedTab] = useState("posts");

  const handleSelectedTab = (selectedTab) => {
    setSelectedTab(selectedTab);
  };

  return (
    <>
      <Header selectedTab={selectedTab} setSelectedTab={handleSelectedTab} />
      {selectedTab === "chess" && <Chess />}
      {selectedTab === "posts" && <Todos />}
    </>
  );
}

export default App;
