import React from "react";

function Button({
  operand,
  onOffHandle,
  onOff,
  setNumber,
  operator,
  number1,
  number2,
  header,
}) {
  return (
    <div
      className={`button operator ${operator} ${header}`}
      onClick={() =>
        operand
          ? operand(number1, number2, operator)
          : onOffHandle
          ? onOffHandle(onOff)
          : setNumber(operator)
      }
    >
      {operator}
    </div>
  );
}

export default Button;
