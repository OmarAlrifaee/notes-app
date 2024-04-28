import { createPortal } from "react-dom";
import "../styles/tools-styles/popup.scss";
const EmptyInputPopup = () => {
  return createPortal(
    <div className="popup">!please enter a title and a details</div>,
    document.getElementById("popup")
  );
};

export default EmptyInputPopup;
