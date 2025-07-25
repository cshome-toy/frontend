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
