import { useContext } from "react";
import CalcContext from "../../context/CalcContext";
import styles from "./Display.module.css";

function Display() {
  let context = useContext(CalcContext);

  return (
    <div className={styles["display"]}>{context.currentState.display}</div>
  );
}

export default Display;
