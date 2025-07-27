import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const expandedContainer = style({
  backgroundColor: vars.colors.mainDark,
  borderRadius: vars.radius.md,
  padding: vars.spacing.ml,
  border: `2px solid ${vars.colors.point}`,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
});

export const formHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: vars.spacing.md,
  paddingBottom: '12px',
  borderBottom: `1px solid ${vars.colors.mainBorder}`,
});

export const formHeaderTitle = style({
  color: vars.colors.white,
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.semibold,
  margin: 0,
});

export const formField = style({
  marginBottom: vars.spacing.md,
});

export const tagSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
});

export const formActions = style({
  display: 'flex',
  gap: '12px',
  justifyContent: 'flex-end',
  paddingTop: vars.spacing.md,
  borderTop: `1px solid ${vars.colors.mainBorder}`,
});

export const cancelBtn = style({
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  backgroundColor: 'transparent',
  border: `1px solid ${vars.colors.mainBorder}`,
  color: '#96989d',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,

  ':hover': {
    backgroundColor: vars.colors.mainLight,
    color: vars.colors.white,
  },
});

export const submitBtn = style({
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  backgroundColor: vars.colors.point,
  border: 'none',
  color: vars.colors.white,
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  transition: 'all 0.2s',

  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: vars.colors.pointHover,
    },
    '&:disabled': {
      backgroundColor: '#4f545c',
      color: '#96989d',
      cursor: 'not-allowed',
    },
  },
});

export const collapseBtn = style({
  background: 'transparent',
  border: 'none',
  color: '#96989d',
  cursor: 'pointer',
  fontSize: vars.font.size.md,
  padding: vars.spacing.xs,
  borderRadius: vars.radius.sm,

  ':hover': {
    backgroundColor: vars.colors.mainLight,
    color: vars.colors.white,
  },
});

export const titleInput = style({
  width: '100%',
  padding: '12px 20px',
  boxSizing: 'border-box',
  backgroundColor: vars.colors.mainLight,
  border: `1px solid ${vars.colors.mainBorder}`,
  borderRadius: '6px',
  color: vars.colors.white,
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.semibold,
  outline: 'none',

  '::placeholder': {
    color: '#96989d',
  },

  ':focus': {
    borderColor: vars.colors.point,
  },
});

export const contentTextarea = style({
  width: '100%',
  minHeight: '100px',
  padding: '12px 20px',
  boxSizing: 'border-box',
  backgroundColor: vars.colors.mainLight,
  border: `1px solid ${vars.colors.mainBorder}`,
  borderRadius: '6px',
  color: '#dcddde',
  fontSize: vars.font.size.sm,
  fontFamily: vars.font.family.primary,
  lineHeight: '1.5',
  resize: 'vertical',
  outline: 'none',

  '::placeholder': {
    color: '#96989d',
  },

  ':focus': {
    borderColor: vars.colors.point,
  },
});
