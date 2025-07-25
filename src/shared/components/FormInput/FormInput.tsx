import type { InputHTMLAttributes } from 'react';
import Input from '../Input';
import { formInputItem, formInputItemTitle, formInputItemTitleRequired } from './FormInput.css';

interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  title: string;
}

export default function FormInput({ title, ...rest }: FormInputProps) {
  return (
    <div className={formInputItem}>
      <p className={formInputItemTitle}>
        <span>{title}</span>
        <span className={formInputItemTitleRequired}>*</span>
      </p>
      <Input variant='auth' {...rest} />
    </div>
  );
}
