import { vars } from '@/vars.css';
import { calc } from '@vanilla-extract/css-utils';
import { style } from '@vanilla-extract/css';

export const sideBar = style({
  width: '80px',
  flexShrink: 0,
  height: calc.subtract('100vh', '32px'),
  backgroundColor: vars.colors.mainDark,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.spacing.md,
});

export const sideBarButton = style({
  width: '40px',
  height: '40px',
  display: 'grid',
  placeItems: 'center',
  color: vars.colors.sub,
  backgroundColor: vars.colors.mainLight,
  borderRadius: vars.radius.lg,
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    backgroundColor: vars.colors.point,
  },
});
