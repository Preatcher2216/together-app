export type LoginForm = {
  email: string;
  password: string;
};

export type RegisterForm = {
  fullName: string;
} & LoginForm;
