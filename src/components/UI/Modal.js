import styles from "./Modal.module.css";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const portalElement = document.getElementById("overlays");
const Modal = function (props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClose}></Backdrop>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
