export const LoginFormNames = {
  email: 'email' as const,
  password: 'password' as const,
};

export const RegisterFormNames = {
  ...LoginFormNames,
  fullName: 'fullName' as const,
};
