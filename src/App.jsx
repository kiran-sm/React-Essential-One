import React from "react";
import Header from "./Components/Header";
import TabComponents from "./Components/TabComponents";

const App = () => {
  function handleSelect() {
    alert("clicked");
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <TabComponents onSelect={handleSelect}>TabComponents </TabComponents>
      <TabComponents>JSX </TabComponents>
      <TabComponents>Props </TabComponents>
      <TabComponents>State </TabComponents>
    </div>
  );
};

export default App;
