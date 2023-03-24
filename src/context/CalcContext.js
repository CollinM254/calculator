import { createContext, useState } from "react";

const CalcContext = createContext();

export function CalcProvider({ children }) {
  let [currentState, setState] = useState({
    inputText: "",
    result: 0,
    display: "",
    isFloat: false,
    lastOp: 0,
    isStartOver: true,
  });

  // Function to execute for all numeric buttons and "." button
  const updateInput = (char) => {
    let newState = { ...currentState };
    newState.inputText += char;
    newState.isStartOver
      ? (newState.display = char)
      : (newState.display += char);
    if (char === ".") newState.isFloat = true;
    newState.isStartOver = false;
    setState(newState);
    console.log(newState);
  };

  // Function to execute for "+/-" button
  const oppSign = () => {
    let newState = { ...currentState };

    if (newState.lastOp === 0) {
      if (newState.display.charAt(0) === "-") {
        newState.display = newState.display.slice(1);
        newState.inputText = newState.inputText.slice(1);
      } else if (newState.display !== "0") {
        newState.inputText = "-" + newState.inputText;
        newState.display = "-" + newState.display;
      }
    }

    setState(newState);
  };

  // Function to execute for "%" button
  const percentage = () => {
    let newState = { ...currentState };
    let dummy = 0;
    if (newState.lastOp === 0) {
      if (!newState.isStartOver) {
        dummy = parseFloat(newState.inputText) * 100;
      } else {
        dummy = parseFloat(newState.result) * 100;
      }
    }

    newState.display = dummy.toString() + "%";

    setState(newState);
  };

  // Function to execute for "AC" button
  const clearAll = () => {
    setState({
      inputText: "",
      result: 0,
      display: "",
      isFloat: false,
      lastOp: 0,
      isStartOver: true,
    });
  };

  // Function to execute with "=" button
  const calculate = () => {
    let dummy = currentState.display.replaceAll("x", "*").replaceAll("÷", "/");
    dummy = eval(dummy);
    let newState = {
      inputText: "",
      result: dummy,
      display: `${dummy}`,
      isFloat: false,
      lastOp: 0,
      isStartOver: true,
    };

    setState(newState);
  };

  // Function to execute for "+", "-", "x", "÷" buttons
  const decideOp = (char) => {
    let newState = { ...currentState };

    newState.display += " " + char + " ";
    newState.isStartOver = false;
    switch (char) {
      case "+": {
        newState.lastOp = 1;
        newState.inputText = "";
        break;
      }
      case "-": {
        newState.lastOp = 2;
        newState.inputText = "";
        break;
      }
      case "*": {
        newState.lastOp = 3;
        newState.inputText = "";
        break;
      }
      case "÷": {
        newState.lastOp = 4;
        newState.inputText = "";
        break;
      }
      default: {
        break;
      }
    }

    setState(newState);
  };

  return (
    <CalcContext.Provider
      value={{
        currentState,
        updateInput,
        clearAll,
        percentage,
        oppSign,
        decideOp,
        calculate,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
}

export default CalcContext;
