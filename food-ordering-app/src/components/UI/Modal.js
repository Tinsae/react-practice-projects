import React, { Fragment } from 'react';
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const Backdrop = ({ onClose }) => {
    return <div className={classes.backdrop} onClick={onClose} />
}
const ModalOverlay = ({ children }) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{children}</div>
    </div>
}
const Modal = ({ children, onClose }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop children={children} onClose={onClose} />, document.getElementById("overlays"))}
            {ReactDOM.createPortal(<ModalOverlay children={children} />, document.getElementById("overlays"))}
        </Fragment>
    );
}

export default Modal
