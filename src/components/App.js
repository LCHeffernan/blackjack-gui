import React from "react";
import Card from "./Card";
import data from "../data/data.json";
import "../styles/app.css";

const App = () => {
  return (
    <div className="App">
      <Card card={data.card} />
    </div>
  );
};

export default App;
