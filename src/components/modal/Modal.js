import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.scss";
export default function Modal(props) {
    const [modalInteriorOpened, setModalInteriorState] = useState(false);
  return (
    <div className="modal-container">
      <CSSTransition
        in={props.open}
        timeout={300}
        classNames="modal-takeover"
        unmountOnExit
        onEnter={() => setModalInteriorState(true)}
        onExited={() => setModalInteriorState(false)}
      >
        <div className="modal-takeover" onClick={() => {setModalInteriorState(false); props.action(false)}}>
          <CSSTransition
            in={modalInteriorOpened}
            timeout={300}
            classNames="login-content"
            unmountOnExit
          >
            {props.children}
          </CSSTransition>
        </div>
      </CSSTransition>
    </div>
  );
}
