import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { button, buttonVariant, buttonSize } from './Button.css';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: keyof typeof buttonVariant;
  size?: keyof typeof buttonSize;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  variant = 'point',
  size = 'lg',
  onClick,
  disabled = false,
  type = 'button',
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(button, buttonVariant[variant], buttonSize[size], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
