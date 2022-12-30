import React, { ChangeEventHandler } from "react";
import "./style.scss";

type FormInputProps = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const FormInput = ({ handleChange, label, ...otherProps }: FormInputProps) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
