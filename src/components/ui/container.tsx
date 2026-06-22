import { cn } from '@/lib/utils';
import { ElementType, ReactNode } from 'react';

const Container = ({
  children,
  className,
  Component = 'div',
}: {
  children: Readonly<ReactNode>;
  className?: string;
  Component?: ElementType;
}) => {
  return (
    <Component className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </Component>
  );
};

export default Container;
