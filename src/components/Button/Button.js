import { useContext } from "react";
import CalcContext from "../../context/CalcContext";
import styles from "./Button.module.css";

function Button({ char, index }) {
  const context = useContext(CalcContext);
  const callbackDecider = {
    AC: context.clearAll,
    "+/-": context.oppSign,
    "%": context.percentage,
    "÷": context.decideOp,
    7: context.updateInput,
    8: context.updateInput,
    9: context.updateInput,
    x: context.decideOp,
    4: context.updateInput,
    5: context.updateInput,
    6: context.updateInput,
    "-": context.decideOp,
    1: context.updateInput,
    2: context.updateInput,
    3: context.updateInput,
    "+": context.decideOp,
    0: context.updateInput,
    ".": context.updateInput,
    "=": context.calculate,
  };

  return (
    <div
      className={`${styles["button"]} ${styles[`btn${index}`]}`}
      onClick={() => callbackDecider[char](char)}
    >
      {char}
    </div>
  );
}

export default Button;
