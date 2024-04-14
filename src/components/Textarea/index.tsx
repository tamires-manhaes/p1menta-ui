import * as React from 'react';
import { cn } from '@/utils/cn';
import { TextareaProps } from './types';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, placeholder, value, onChange, required, error, ...props },
    ref,
  ) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[60px] w-full rounded-md border border-input border-neutral-300 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
