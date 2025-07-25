import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const loginContainer = style({
  width: '446px',
  height: '100%',
  display: 'flex',
  gap: vars.spacing.xs,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const loginContainerLarge = style({
  '@media': {
    'screen and (min-width: 830px)': {
      display: 'flex',
      gap: vars.spacing.xl,
    },
  },
});

export const loginContainerLargeItem = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 830px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: vars.spacing.sm,
      width: '256px',
    },
  },
});

export const loginContainerQr = style({
  width: '176px',
  height: '176px',
  marginBottom: vars.spacing.md,
});

export const loginContainerSubtitle = style({
  fontSize: '16px',
});
