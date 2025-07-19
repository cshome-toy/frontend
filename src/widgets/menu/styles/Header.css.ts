import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const header = style({
  width: '100%',
  height: '32px',
  backgroundColor: vars.colors.mainDark,
  color: vars.colors.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  fontWeight: vars.font.weight.medium,
  fontSize: vars.font.size.sm,
});

export const headerContent = style({
  display: 'flex',
  position: 'absolute',
  right: vars.spacing.md,
  alignItems: 'center',
  gap: vars.spacing.lg,
  color: vars.colors.subDark,
});

export const headerImage = style({
  width: '20px',
  height: '20px',
  borderRadius: vars.radius.sm,
  objectFit: 'cover',
  objectPosition: 'center',
});
