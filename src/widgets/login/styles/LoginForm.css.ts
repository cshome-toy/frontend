import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const loginForm = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  marginTop: vars.spacing.lg,
});

export const loginFormAtag = style({
  width: '100%',
  textAlign: 'start',
  textDecoration: 'none',
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  color: vars.colors.pointLight,
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const loginFormPtag = style({
  textAlign: 'start',
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  color: vars.colors.subDark,
  display: 'flex',
  gap: vars.spacing.xs,
  width: '100%',
  marginTop: vars.spacing.xs,
});

export const loginFormButton = style({
  height: '48px',
  borderRadius: vars.radius.md,
  backgroundColor: vars.colors.pointLight,
  color: vars.colors.white,
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.bold,
  marginTop: vars.spacing.md,
});
