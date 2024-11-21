import "./App.css";
import Todos from "./components/todos";
import Chess from "./components/chess";
import Header from "./components/header";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("posts");

  const handleDataFromHeader = (data) => {
    setSelectedTab(data);
    // console.log(data);
  };

  return (
    <>
      <Header onDataFromHeader={handleDataFromHeader} />
      {selectedTab === "chess" && <Chess />}
      {selectedTab === "posts" && <Todos />}
    </>
  );
}

export default App;
