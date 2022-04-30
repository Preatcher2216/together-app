import React, {FC} from 'react';
import {FieldError, UseFormRegister} from 'react-hook-form';

// TODO: запилить нормальный тип для register
type InputType = {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  error: FieldError;
};

const Input = ({name, label, register, error}: InputType) => {
  return (
    <div className="auth__form-input">
      <label className="auth__form-label">
        {label}
        <input className="auth__field" {...register(name, {required: true})} />
      </label>
      <p>{error?.message}</p>
    </div>
  );
};

export default Input;
