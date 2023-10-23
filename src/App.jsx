import React from "react";
import "./app.css";
import Ilustration from "./img/fitness_stats.svg";
import Calculator from "./components/Calculadora/Calculator";


const App = () => {
  return (
    <div className="container">
      <img src={Ilustration} alt="" />
      <Calculator />
    </div>
  );
};

export default App;
