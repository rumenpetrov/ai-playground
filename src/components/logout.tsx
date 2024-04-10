import type { ReactNode } from 'react';
import { signOut } from 'auth-astro/client';

interface Props {
  children: ReactNode;
  className?: string,
}

export const Login = (props: Props): JSX.Element => {
  const { children, className, ...rest } = props;

  return <button {...rest} className={className} onClick={() => signOut()}>{children}</button>;
};

export default Login;
