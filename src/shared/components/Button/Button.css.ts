import { vars } from '@/vars.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const button = style({
  borderRadius: vars.radius.md,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  outline: 'none',
  fontWeight: '500',
});

export const buttonVariant = styleVariants({
  point: {
    backgroundColor: vars.colors.point,
    color: vars.colors.white,
    border: `1px solid ${vars.colors.pointBorder}`,
    ':hover': {
      backgroundColor: vars.colors.pointHover,
    },
  },
  main: {
    backgroundColor: vars.colors.mainLight,
    border: `1px solid ${vars.colors.mainBorder}`,
    color: vars.colors.white,
    ':hover': {
      backgroundColor: vars.colors.mainXLight,
    },
  },
});

export const buttonSize = styleVariants({
  sm: {
    padding: '14px 16px',
    fontSize: vars.font.size.sm,
  },
  lg: {
    paddingTop: '20px',
    paddingBottom: '20px',
    width: '100%',
    fontSize: vars.font.size.md,
  },
});
