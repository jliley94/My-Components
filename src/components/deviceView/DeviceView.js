import React from "react";
import "./DeviceView.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignal,
  faWifi,
  faBatteryHalf
} from "@fortawesome/free-solid-svg-icons";

export default function DeviceView(props) {
  const deviceType = (!!props.device) ? props.device : "null";
  const date = new Date();
  const mins = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
  const inRange = (window.innerWidth > 800);
  return (
      (!!props.device && inRange) ?
    <div className={`device-view ${deviceType.toLowerCase()}`}>
        <div className="device-front">
            {deviceType === "Mobile" && <div className="mobile-head-overlay"></div>}
            <div className={`device-view-head ${deviceType.toLowerCase()}`}>
                <div className="browser-bar">
                    <div className="toast-display">
                        <div className="time">{`${date.getHours()}:${mins}`}</div>
                        <div className="icons">
                            <FontAwesomeIcon icon={faSignal} />
                            <FontAwesomeIcon icon={faWifi} />
                            <FontAwesomeIcon icon={faBatteryHalf} />
                        </div>
                    </div>
                    <div className="searchbar"></div>
                </div>
            </div>
            
            <div className={`device-view-screen ${deviceType.toLowerCase()}`}>
                <div className="device-view-main">{props.children}</div>
            </div>
        </div>
    </div>
    :
    <div className="emptyContainer">{props.children}</div>    
  );
}
