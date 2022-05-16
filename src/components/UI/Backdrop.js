import styles from "./Modal.module.css";

const Backdrop = function (props) {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

export default Backdrop;
