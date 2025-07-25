import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const authBackground = style({
  inset: 0,
});

export const authLogo = style({
  position: 'absolute',
  top: vars.spacing.authLogo,
  left: vars.spacing.authLogo,
});

export const authContainerWrapper = style({
  position: 'absolute',
  inset: 0,
  display: 'grid',
  placeItems: 'center',
});

export const authContainer = style({
  width: 'fit-content',
  maxWidth: '784px',
  height: 'fit-content',
  maxHeight: '746px',
  backgroundColor: vars.colors.main,
  borderRadius: vars.radius.md,
  padding: vars.spacing.xl,
  color: vars.colors.white,
  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.2)',
});
