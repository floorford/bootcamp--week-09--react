import React from "react";

const Input = ({ valid, label, handleChange, value }) => (
  <div className={ "form-group" + (valid ? "" : " has-error")}>
    <label>{ label }</label>
    <input
      type="password"
      className="form-control"
      value={ value }
      onChange={ handleChange }
    />
    { valid ? null : <p className="help-block">Field required</p> }
  </div>
);

export default Input;
