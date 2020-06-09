import React from 'react';
import './ActionButton.scss'
export default function ActionButton(props) {

  const buttonStyle = (props.type) ? props.type.toLowerCase() : "";

  return (
    <div className={`actionButton ${buttonStyle}`} onClick={props.action}>
      {props.text}
    </div>
  );
}
