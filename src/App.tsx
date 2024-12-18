import { Todos } from "./components/posts/index";
import { Chess } from "./components/chess/chess";
import { useState } from "react";
import { Header } from "./components/header/header";
import { Counter } from "./features/counter/Counter";

function App() {
  const [selectedTab, setSelectedTab] = useState<"posts" | "chess">("posts");

  const handleSelectedTab = (selectedTab: "posts" | "chess") => {
    setSelectedTab(selectedTab);
  };

  return (
    <>
      <Header selectedTab={selectedTab} setSelectedTab={handleSelectedTab} />
      {selectedTab === "chess" && <Chess />}
      {selectedTab === "posts" && <Todos />}
      <Counter />
    </>
  );
}

export default App;
