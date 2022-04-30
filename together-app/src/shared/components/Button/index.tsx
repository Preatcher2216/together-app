import cn from 'classnames';
import {ButtonType} from 'shared/models/common';

const Button = ({label, className}: ButtonType) => {
  return (
    <button className={cn('login__submit', className)} type="submit">
      {label}
    </button>
  );
};

export default Button;
