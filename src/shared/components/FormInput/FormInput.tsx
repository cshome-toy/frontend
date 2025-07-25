import { motion } from 'motion/react';
import React, { useState } from 'react';

import type { InputHTMLAttributes } from 'react';
import Input from '../Input';
import {
  formInputItem,
  formInputItemDescription,
  formInputItemTitle,
  formInputItemTitleRequired,
} from './FormInput.css';
import { ANIMATE_DURATION } from '@/shared/constants';

interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  title: string;
  required?: boolean;
  description?: string;
}

export default function FormInput({ title, required = true, description, ...rest }: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    rest.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    rest.onBlur?.(e);
  };

  return (
    <motion.div
      className={formInputItem}
      layout
      layoutId={`form-input-${title}`}
      transition={{
        duration: ANIMATE_DURATION,
        ease: 'easeOut',
      }}
      style={{ willChange: 'transform' }}
    >
      <p className={formInputItemTitle}>
        <span>{title}</span>
        {required && <span className={formInputItemTitleRequired}>*</span>}
      </p>
      <Input variant='auth' onFocus={handleFocus} onBlur={handleBlur} {...rest} />
      {description && (
        <motion.div
          layout
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isFocused ? 1 : 0,
            height: isFocused ? 'auto' : 0,
          }}
          transition={{
            duration: ANIMATE_DURATION,
            ease: 'easeOut',
          }}
          style={{
            overflow: 'hidden',
            willChange: 'transform, height',
          }}
        >
          <p className={formInputItemDescription}>{description}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
