import clsx from 'clsx';
import { HTMLProps } from 'react';

export const KeyWord = ({
  className,
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => (
  <span className={clsx(className, )} {...props}>
    {children}
  </span>
);
