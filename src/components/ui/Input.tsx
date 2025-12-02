import React, { useId } from 'react';
import { cn } from '@/lib/utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, helperText, icon, iconPosition = 'left', className, required, ...props },
    ref
  ) => {
    const id = useId();
    const errorId = `${id}-error`;
    const helperId = `${id}-helper`;

    const inputStyles = cn(
      'w-full px-4 py-2.5 bg-neutral-900 border rounded-lg font-body text-base text-text-primary',
      'placeholder:text-text-muted',
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'transition-colors',
      error ? 'border-red-500' : 'border-neutral-700',
      icon && iconPosition === 'left' && 'pl-11',
      icon && iconPosition === 'right' && 'pr-11',
      className
    );

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block mb-2 font-body font-semibold text-text-primary">
            {label}
            {required && (
              <>
                <span className="text-red-500 ml-1" aria-hidden="true">
                  *
                </span>
                <span className="sr-only">(required)</span>
              </>
            )}
          </label>
        )}

        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">{icon}</div>
          )}

          <input
            ref={ref}
            id={id}
            className={inputStyles}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={cn(error && errorId, helperText && helperId)}
            required={required}
            {...props}
          />

          {icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">{icon}</div>
          )}
        </div>

        {helperText && !error && (
          <p id={helperId} className="mt-1 text-sm text-text-muted">
            {helperText}
          </p>
        )}

        {error && (
          <p
            id={errorId}
            className="mt-1 text-sm text-red-500 flex items-center gap-1"
            role="alert"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
