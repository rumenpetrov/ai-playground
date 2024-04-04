
import React from 'react';
import type { ReactNode } from 'react';
import { signIn } from 'auth-astro/client';

interface Props {
  provider: string;
  children: ReactNode;
}

const providerMapping = {
  github: 'GitHub',
};

export const Login = (props: Props) => {
  const { children, provider, ...rest } = props;

  if (provider !== 'github') {
    console.error('Provider not supported.', provider);
    return null;
  }

  return (
    <button {...rest} onClick={() => signIn(provider)}>
      {children}
      <span>Login with {providerMapping?.[provider]}</span>
    </button>
  )
};

export default Login;
