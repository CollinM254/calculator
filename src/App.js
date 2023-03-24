import ButtonGrid from "./components/ButtonGrid/ButtonGrid";
import Display from "./components/Display/Display";
import styles from "./App.module.css";
import { CalcProvider } from "./context/CalcContext";

export default function App() {
  return (
    <CalcProvider>
      <div className={`${styles["app"]}`}>
        <Display />
        <ButtonGrid></ButtonGrid>
      </div>
    </CalcProvider>
  );
}
