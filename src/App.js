import "./App.css";
import Header from "./Header";
import { useState } from "react";
import Button from "./Button";

function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [result, setResult] = useState(0);
  const [onOff, setOnOff] = useState(false);

  function setNumber(number) {
    if (!number1) {
      setNumber1(number);
    } else {
      setNumber2(number);
    }
  }

  function onOffHandle(operator) {
    setOnOff(!operator);
  }

  function operand(number1, number2, key) {
    switch (key) {
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "/":
        let hasil = number1 / number2;
        setResult(hasil.toFixed(2));
        break;
      case "*":
        setResult(number1 * number2);
        break;
      case "^":
        setResult(number1 ** number2);
        break;
      case "swap":
        setNumber1(number2);
        setNumber2(number1);
        break;
      case "clear":
        setNumber1(null);
        setNumber2(null);
        setResult(0);
        break;

      default:
        break;
    }
  }
  return (
    <div className="flex-container-column">
      <div className="display">
        <Header number={number1} title="Number 1" />
        <Header number={number2} title="Number 2" />
        <Header number={result} title="Result" />
      </div>
      <div className={`flex-container-row`}>
        <Button
          number1={number1}
          number2={number2}
          operand={onOff ? operand : () => alert("nyalakan calculator!")}
          operator="+"
          header={onOff ? "header-on" : "header-off"}
        />
        <Button
          number1={number1}
          number2={number2}
          operand={onOff ? operand : () => alert("nyalakan calculator!")}
          header={onOff ? "header-on" : "header-off"}
          operator="-"
        />
        <Button
          number1={number1}
          number2={number2}
          operand={onOff ? operand : () => alert("nyalakan calculator!")}
          header={onOff ? "header-on" : "header-off"}
          operator="/"
        />
      </div>
      <div
        className={`flex-container-row ${onOff ? "header-on" : "header-off"}`}
      >
        <Button
          number1={number1}
          number2={number2}
          operand={onOff ? operand : () => alert("nyalakan calculator!")}
          operator="^"
          header={onOff ? "header-on" : "header-off"}
        />
        <Button
          number1={number1}
          number2={number2}
          operand={onOff ? operand : () => alert("nyalakan calculator!")}
          operator="swap"
          header={onOff ? "header-on" : "header-off"}
        />
        <Button
          number1={number1}
          number2={number2}
          operand={onOff ? operand : () => alert("nyalakan calculator!")}
          operator="*"
          header={onOff ? "header-on" : "header-off"}
        />
      </div>
      <div className={`flex-container-row`}>
        <Button
          number1={number1}
          number2={number2}
          setNumber={onOff ? setNumber : () => alert("nyalakan calculator!")}
          operator={1}
          header={onOff ? "number-on" : "number-off"}
        />
        <Button
          number1={number1}
          number2={number2}
          setNumber={onOff ? setNumber : () => alert("nyalakan calculator!")}
          operator={2}
          header={onOff ? "number-on" : "number-off"}
        />
        <Button
          number1={number1}
          number2={number2}
          setNumber={onOff ? setNumber : () => alert("nyalakan calculator!")}
          operator={3}
          header={onOff ? "number-on" : "number-off"}
        />
      </div>
      <div className={`flex-container-row`}>
        <Button
          number1={number1}
          number2={number2}
          setNumber={onOff ? setNumber : () => alert("nyalakan calculator!")}
          operator={4}
          header={onOff ? "number-on" : "number-off"}
        />
        <Button
          number1={number1}
          number2={number2}
          setNumber={onOff ? setNumber : () => alert("nyalakan calculator!")}
          operator={5}
          header={onOff ? "number-on" : "number-off"}
        />
        <Button
          number1={number1}
          number2={number2}
          setNumber={onOff ? setNumber : () => alert("nyalakan calculator!")}
          operator={6}
          header={onOff ? "number-on" : "number-off"}
        />
      </div>
      <div className={`flex-container-row`}>
        <Button
          number1={number1}
          number2={number2}
          setNumber={onOff ? setNumber : () => alert("nyalakan calculator!")}
          operator={7}
          header={onOff ? "number-on" : "number-off"}
        />
        <Button
          number1={number1}
          number2={number2}
          setNumber={onOff ? setNumber : () => alert("nyalakan calculator!")}
          operator={8}
          header={onOff ? "number-on" : "number-off"}
        />
        <Button
          number1={number1}
          number2={number2}
          setNumber={onOff ? setNumber : () => alert("nyalakan calculator!")}
          operator={9}
          header={onOff ? "number-on" : "number-off"}
        />
      </div>
      <div className={`flex-container-row`}>
        <Button
          number1={number1}
          number2={number2}
          onOff={onOff}
          onOffHandle={onOffHandle}
          operator="onoff"
          header="onOff"
        />
        <Button
          number1={number1}
          number2={number2}
          setNumber={onOff ? setNumber : () => alert("nyalakan calculator!")}
          operator={0}
          header={onOff ? "number-on" : "number-off"}
        />
        <Button
          number1={number1}
          number2={number2}
          operand={onOff ? operand : () => alert("nyalakan calculator!")}
          operator="clear"
          header={onOff ? "number-on" : "number-off"}
        />
      </div>
    </div>
  );
}

export default App;
