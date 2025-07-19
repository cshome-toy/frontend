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

export const sideBarButtonWrapper = style({
  width: '100%',
  height: '40px',
  display: 'grid',
  placeItems: 'center',
  position: 'relative',
});

export const sideBarActiveIndicator = style({
  width: '4px',
  height: 'var(--indicator-height, 0px)',
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.lg,
  position: 'absolute',
  top: '50%',
  left: '0px',
  transform: 'translateY(-50%)',
  transition: 'height 0.2s ease-in-out',
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
  overflow: 'hidden',
  position: 'relative',
});

export const sideBarSeparator = style({
  width: '38px',
  height: '1px',
  backgroundColor: vars.colors.mainBorder,
});

export const sideBarButtonImage = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});
