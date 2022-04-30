import * as yup from 'yup';

export const LoginSchema = yup
  .object({
    email: yup.string().required('Email number is required').email('Email incorrect'),
    password: yup.string().required('Password number is required'),
  })
  .required();

export const RegisterSchema = yup
  .object({
    fullName: yup.string().required('Full Name is required'),
    email: yup.string().required('Email number is required').email('Email incorrect'),
    password: yup.string().required('Password number is required'),
  })
  .required();
