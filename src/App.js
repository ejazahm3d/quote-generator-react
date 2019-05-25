import React from "react";
import "./styles.css";
import CodeBox from "./CodeBox";
import quotes from "./quotes";

const App = () => {
  return (
    <div className="App">
      <div className="card text-center">
        <CodeBox quotes={quotes} />
      </div>
    </div>
  );
};

export default App;
