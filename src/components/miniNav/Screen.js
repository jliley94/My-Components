import React from "react";
import './Screen.scss'
export default function Screen(props) {
  return (
    <div className="screen" style={{transform: `translateY(${props.focus * -812}px)`}}>
      <section className="page">
        <h2>Home Page</h2>
        <div>Check out the navigation bar in the top-left corner!</div>
      </section>

      <section className="page">
        <h2>About us</h2>
        <div>Check out the navigation bar in the top-left corner!</div>
      </section>

      <section className="page">
        <h2>Contact</h2>
        <div>Check out the navigation bar in the top-left corner!</div>
      </section>

      <section className="page">
        <h2>Help</h2>
        <div>Check out the navigation bar in the top-left corner!</div>
      </section>

    </div>
  );
}
