import {LoginForm} from 'shared/models/auth';
import {LoginFormNames} from 'shared/constants/formNames';
import {LoginSchema} from 'shared/helpers/validationSchemas';
import {Input} from 'shared/components';
import Button from 'shared/components/Button';
import {yupResolver} from '@hookform/resolvers/yup';
import {SubmitHandler, useForm} from 'react-hook-form';

const Login = () => {
  const {email, password} = LoginFormNames;

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginForm>({
    resolver: yupResolver(LoginSchema),
  });

  // TODO: Запилить логику обработки данных формы, когда будет готово API

  const onSubmit: SubmitHandler<LoginForm> = (date) => console.log(date);

  // TODO: Запилить компонент кнопки

  return (
    <div className="auth">
      <span>Логинка</span>
      <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
        <Input name={email} label="Почта" register={register} error={errors[email]} />
        <Input name={password} label="Пароль" register={register} error={errors[password]} />
        <Button label="Войти" />
      </form>
      <a href="#" className="login-forgot-pass">
        forgot password?
      </a>
    </div>
  );
};

export default Login;
