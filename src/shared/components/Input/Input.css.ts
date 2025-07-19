import { vars } from '@/vars.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const input = style({
  borderRadius: vars.radius.md,
  border: `2px solid ${vars.colors.mainBorder}`,
  backgroundColor: vars.colors.mainLight,
  color: vars.colors.white,
  outline: 'none',
  transition: 'all 0.2s ease-in-out',
  fontFamily: vars.font.family.primary,
  fontWeight: vars.font.weight.medium,
  '::placeholder': {
    color: vars.colors.subDark,
  },
  ':focus': {
    borderColor: vars.colors.pointFocus,
  },
});

export const inputVariant = styleVariants({
  default: {
    backgroundColor: vars.colors.mainLight,
    borderColor: vars.colors.mainBorder,
  },
  error: {
    backgroundColor: vars.colors.mainLight,
    borderColor: '#ff6b6b',
    ':focus': {
      borderColor: '#ff6b6b',
      boxShadow: '0 0 0 2px #ff6b6b20',
    },
  },
});

export const inputSize = styleVariants({
  sm: {
    padding: '8px 12px',
    fontSize: vars.font.size.sm,
  },
  md: {
    padding: '12px',
    fontSize: vars.font.size.md,
  },
  lg: {
    padding: '16px 20px',
    fontSize: vars.font.size.lg,
  },
});
