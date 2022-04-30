import {Input} from 'shared/components';
import Button from 'shared/components/Button';
import {LoginForm, RegisterForm} from 'shared/models/auth';
import {RegisterSchema} from 'shared/helpers/validationSchemas';
import {RegisterFormNames} from 'shared/constants/formNames';
import {yupResolver} from '@hookform/resolvers/yup';
import {SubmitHandler, useForm} from 'react-hook-form';

const Register = () => {
  const {email, password, fullName} = RegisterFormNames;

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterForm>({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<LoginForm> = (date) => console.log(date);

  return (
    <div className="auth">
      <span>Регистрация</span>
      <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
        <Input name={fullName} label="ФИО" register={register} error={errors[fullName]} />
        <Input name={email} label="Почта" register={register} error={errors[email]} />
        <Input name={password} label="Пароль" register={register} error={errors[password]} />
        <Button label="Продолжить" />
      </form>
    </div>
  );
};

export default Register;
