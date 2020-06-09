import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faInfo,
  faEnvelopeSquare,
  faQuestionCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./IconNav.scss";

export default function IconNav(props) {
  const [navActive, setNavState] = useState(false);
  const display = navActive ? "show" : "hide";
  const mainIcon = navActive ? faTimes : faBars;
  const delay = 0.3;
  return (
    <div className="mini-nav">
      <div
        className={`nav-item main nav-burger ${(navActive) ? "active" : ""}`}
        onClick={() => setNavState(!navActive)}
      >
        <FontAwesomeIcon icon={mainIcon} />
      </div>
      <div
        className={`nav-item sub nav-home ${display}`}
        style={{ transitionDelay: delay * ((navActive) ? 0 : 3) + "s" }}
        onClick={() => props.changeFocus(0)}
      >
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div
        className={`nav-item sub nav-about ${display}`}
        style={{ transitionDelay: delay * ((navActive) ? 1 : 2) + "s" }}
        onClick={() => props.changeFocus(1)}
      >
        <FontAwesomeIcon icon={faInfo} />
      </div>
      <div
        className={`nav-item sub nav-contact ${display}`}
        style={{ transitionDelay: delay * ((navActive) ? 2 : 1) + "s" }}
        onClick={() => props.changeFocus(2)}
      >
        <FontAwesomeIcon icon={faEnvelopeSquare} />
      </div>
      <div
        className={`nav-item sub nav-help ${display}`}
        style={{ transitionDelay: delay * ((navActive) ? 3 : 0) + "s" }}
        onClick={() => props.changeFocus(3)}
      >
        <FontAwesomeIcon icon={faQuestionCircle} />
      </div>
    </div>
  );
}
