import type { ReactNode } from 'react';
import { signIn } from 'auth-astro/client';

type Provider = 'github';

interface Props {
  provider: Provider;
  children: ReactNode;
  className?: string,
};

const providerMapping = {
  github: 'GitHub',
} as const;

export const Login = (props: Props): JSX.Element | null => {
  const { children, provider, className, ...rest } = props;

  if (provider !== 'github') {
    console.error('Provider not supported.', provider);
    return null;
  }

  return (
    <button {...rest} className={className} onClick={() => signIn(provider)}>
      {children}
      <span>Login with {providerMapping?.[provider]}</span>
    </button>
  )
};

export default Login;
