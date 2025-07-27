import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const header = style({
  padding: '6px 16px',
  borderBottom: `1px solid ${vars.colors.mainBorder}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const headerTitle = style({
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.semibold,
  color: vars.colors.white,
  display: 'flex',
  gap: vars.spacing.sm,
});

export const contents = style({
  padding: vars.spacing.md,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  backgroundColor: vars.colors.mainLight,
  borderRadius: vars.radius.md,
  boxSizing: 'border-box',
  height: '100%',
  color: vars.colors.sub,
  fontWeight: vars.font.weight.bold,
  fontSize: vars.font.size.sm,
  lineHeight: '1.5',
});

export const splitContainer = style({
  display: 'flex',
  height: '100%',
  backgroundColor: vars.colors.mainLight,
});

export const listSection = style({
  minWidth: '300px',
  maxWidth: '80%',
  padding: vars.spacing.md,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  backgroundColor: vars.colors.mainLight,
  borderRadius: vars.radius.md,
  boxSizing: 'border-box',
  height: '100%',
  color: vars.colors.sub,
  fontWeight: vars.font.weight.bold,
  fontSize: vars.font.size.sm,
  lineHeight: '1.5',
  overflow: 'hidden',
});

export const listSectionFullscreen = style({
  minWidth: '300px',
  maxWidth: '100%',
  padding: vars.spacing.md,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  backgroundColor: vars.colors.mainLight,
  borderRadius: vars.radius.md,
  boxSizing: 'border-box',
  height: '100%',
  color: vars.colors.sub,
  fontWeight: vars.font.weight.bold,
  fontSize: vars.font.size.sm,
  lineHeight: '1.5',
  overflow: 'hidden',
});

export const detailSection = style({
  minWidth: '300px',
  padding: vars.spacing.md,
  backgroundColor: vars.colors.mainLight,
  overflow: 'hidden',
});

export const threadCloseBtn = style({
  background: 'transparent',
  border: 'none',
  color: '#96989d',
  cursor: 'pointer',
  fontSize: vars.font.size.md,
  borderRadius: vars.radius.sm,
  flexShrink: 0,

  ':hover': {
    backgroundColor: vars.colors.mainDark,
    color: vars.colors.white,
  },
});
