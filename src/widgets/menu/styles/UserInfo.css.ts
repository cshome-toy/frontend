import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const userInfo = style({
  width: '320px',
  maxHeight: '60px',
  height: 'fit-content',
  backgroundColor: vars.colors.mainLight,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.colors.mainBorder}`,
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: vars.spacing.bottom,
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});

export const userInfoImage = style({
  width: '40px',
  height: '40px',
  borderRadius: '100%',
});

export const userInfoContent = style({
  display: 'flex',
  flexDirection: 'column',
  color: vars.colors.sub,
  fontWeight: vars.font.weight.semibold,
});

export const userInfoContentName = style({
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.semibold,
});

export const userInfoContentEmail = style({
  fontSize: vars.font.size.sm,
  color: vars.colors.subDark,
  fontWeight: vars.font.weight.medium,
});
