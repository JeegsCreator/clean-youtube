import { cleanVisuals } from "../../lib/cleanVisuals";
import "../../styles/styles.css";
import "../../styles/header.css";

cleanVisuals();

window.addEventListener("load", () => {
  cleanVisuals();
  const intervalId = setInterval(cleanVisuals, 1500);
  setTimeout(() => {
    clearInterval(intervalId);
  }, 6000);
});