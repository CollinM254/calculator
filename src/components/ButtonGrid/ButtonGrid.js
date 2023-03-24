import Button from "../Button/Button";
import styles from "./ButtonGrid.module.css";

function ButtonGrid() {
  // Raw list of button characters from left to right.
  const buttonList = [
    "AC",
    "+/-",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <div className={styles.numbersGrid}>
      {buttonList.map((char, index) => (
        <Button key={index} char={char} index={index} />
      ))}
    </div>
  );
}

export default ButtonGrid;
