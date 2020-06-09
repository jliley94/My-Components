import React from "react";
import ActionButton from "../actionButton/ActionButton";
import './Login.scss';
export default function LoginForm(props) {
  return (
    <form
      className="login-content"
      onSubmit="#"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="form-container">
        <h2>Login</h2>
        <div className="input-container">
          <input type="email" placeholder="Email" name="email" required />

          <input type="password" placeholder="Password" name="psw" required />

          <ActionButton action={props.close} type="Prime" text="Login" />
        </div>
      </div>
    </form>
  );
}
