import React from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils.ts';

const componentMapping = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4',
  h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  h5: 'scroll-m-20 text-xl font-semibold tracking-tight',
  h6: 'scroll-m-20 text-xl font-semibold tracking-tight',
  p: 'leading-7 [&:not(:first-child)]:mt-6',
};

interface Props {
  children: ReactNode;
  Component: string;
  className?: string;
}

export const Typography = (props: Props) => {
  const { children, Component, className, ...rest } = props;

  return <Component {...rest} className={cn(componentMapping?.[Component], className)}>{children}</Component>;
};

export default Typography;
