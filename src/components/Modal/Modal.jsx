import React from "react";
import ReactDOM from "react-dom";

import styles from "./modalStyles.module.css";

export default function Modal({isOpen, onClose, children}) {
  if(!isOpen) return null;

  return ReactDOM.createPortal(
    <>
    <div name='overlay' className={styles.overlay} onClick={onClose}/>
    <div className={styles.modal_container} >
      {children}
    </div>
    </>,
    document.getElementById('portal')
  )
}
