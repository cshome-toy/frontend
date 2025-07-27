import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const searchContainer = style({
  display: 'flex',
  gap: vars.spacing.sm,
  backgroundColor: vars.colors.mainDark,
  border: `1.5px solid ${vars.colors.mainBorder}`,
  borderRadius: vars.radius.lg,
  padding: '12px 16px',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const searchInput = style({
  backgroundColor: vars.colors.mainDark,
  border: 'none',
  borderRadius: vars.radius.sm,
  color: '#dcddde',
  fontSize: '20px',
  fontWeight: vars.font.weight.bold,
  outline: 'none',
  width: '100%',
});

export const newPostBtn = style({
  minWidth: '120px',
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  backgroundColor: vars.colors.point,
  color: vars.colors.white,
  border: 'none',
  borderRadius: '45px',
  cursor: 'pointer',
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});
