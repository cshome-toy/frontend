import { type InputHTMLAttributes } from 'react';
import { input, inputVariant, inputSize } from './Input.css';
import { clsx } from 'clsx';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: keyof typeof inputVariant;
  size?: keyof typeof inputSize;
  className?: string;
}

export default function Input({ variant = 'default', size = 'md', className, ...props }: InputProps) {
  return <input className={clsx(input, inputVariant[variant], inputSize[size], className)} {...props} />;
}
