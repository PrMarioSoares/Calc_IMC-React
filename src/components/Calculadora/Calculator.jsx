import React, { useState } from "react";
import { FaWeightHanging } from "react-icons/fa";
import { RiRulerFill } from "react-icons/ri";
import InputMask from "react-input-mask";
import Button from "../button/Button";
import "./calculator.css";

import Descricao1 from "../resultados/Descricao1";
import Descri2 from "../resultados/Descri2";
import Descri6 from "../resultados/Descri6";
import Descri3 from "../resultados/Descri3";
import Descri4 from "../resultados/Descri4";
import Descri5 from "../resultados/Descri5";
import ButtonReset from "../button/ButtonReset";

const Calculator = () => {
  const [form, setForm] = useState("");
  const [result, setResult] = useState(null);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("event 1", event.target.name);
    console.log("event 2", event.target.value);
    console.log("Form", form.altura);
  }
  function handlesubmit(event) {
    event.preventDefault();
    if ((!form.peso && !form.altura) || !form.altura || !form.peso) {
      alert("Digite valores válidos");
    } else {
      const imc = form.peso / (form.altura * form.altura);
      const formatedImc = imc.toFixed(2);
      setResult(formatedImc);
    }
  }

  return (
    <form onSubmit={handlesubmit}>
      <div className="calculator">
        <h1 id="title">Calculadora - IMC</h1>
        <div className="form-container">
          <div className="form">
            <div className="container-input-label">
              <label>Quanto você Pesa?__({<FaWeightHanging />}_Kg) </label>
              <div className="children-input-label">
                <InputMask
                  placeholder=" Digite seu peso..."
                  onChange={handleChange}
                  name="peso"
                />
              </div>
              <div className="children-input-label">
                <label htmlFor="">
                  Qual a sua altura?__(
                  <RiRulerFill />
                  _Mt)
                </label>
                <InputMask
                  placeholder="Digite sua altura..."
                  mask="9.99"
                  onChange={handleChange}
                  name="altura"
                />
                <Button />
              </div>
              <div className="result">
                <p className="p1">O seu IMC é: {result} </p>
                <p>
                  {" "}
                  {result <= 18.5 && result != null ? <Descricao1 /> : ""}
                  {result > 18.5 && result <= 24.9 ? <Descri2 /> : ""}
                  {result > 24.9 && result <= 29.9 ? <Descri3 /> : ""}
                  {result > 29.9 && result <= 34.9 ? <Descri4 /> : ""}
                  {result > 34.9 && result <= 39.9 ? <Descri5 /> : ""}
                  {result >= 40 && result != null ? <Descri6 /> : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Calculator;
