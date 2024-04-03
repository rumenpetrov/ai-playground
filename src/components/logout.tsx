import React from 'react';
import type { ReactNode } from 'react';
import { signOut } from 'auth-astro/client';

interface Props {
  children: ReactNode;
}

export const Login = (props: Props) => {
  const { children, ...rest } = props;

  return <button {...rest} onClick={() => signOut()}>{children}</button>;
};

export default Login;
