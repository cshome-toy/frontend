import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const formInputItem = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
});

export const formInputItemTitle = style({
  fontSize: vars.font.size.xs,
  fontWeight: vars.font.weight.bold,
  display: 'flex',
  gap: vars.spacing.xs,
});

export const formInputItemTitleRequired = style({
  color: vars.colors.error,
});

export const formInputItemDescription = style({
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  color: vars.colors.sub,
});
