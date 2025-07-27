import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const postsList = style({
  flex: 1,
  overflowY: 'auto',
});

export const postItem = style({
  backgroundColor: vars.colors.mainXLight,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.md,
  marginBottom: '12px',
  cursor: 'pointer',
  transition: 'all 0.2s',
  border: `1.5px solid ${vars.colors.mainBorder}`,
  selectors: {
    '&:hover': {
      borderColor: vars.colors.subDark,
      filter: 'brightness(105%)',
      backgroundColor: vars.colors.mainXLight,
    },
  },
});

export const postHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: vars.spacing.sm,
});

export const postTitle = style({
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.semibold,
  color: vars.colors.white,
  margin: 0,
});

export const postTime = style({
  fontSize: '15px',
  color: '#96989d',
});

export const postMeta = style({
  fontSize: vars.font.size.xs,
  color: vars.colors.point,
  marginBottom: vars.spacing.sm,
});

export const postDescription = style({
  fontSize: vars.font.size.sm,
  color: '#dcddde',
  lineHeight: '1.4',
  marginBottom: '12px',
});

export const postActions = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,
});

export const actionBtn = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,
  padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
  backgroundColor: 'transparent',
  border: 'none',
  color: '#96989d',
  cursor: 'pointer',
  borderRadius: vars.radius.sm,
  fontSize: vars.font.size.md,
  transition: 'all 0.2s',
  alignContent: 'center',
});

export const postItemSelected = style({
  backgroundColor: vars.colors.mainXLight,
  borderColor: vars.colors.point,
});

export const postIconSpan = style({ display: 'flex', alignItems: 'center', gap: '4px' });
