import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const expandedContainer = style({
  backgroundColor: vars.colors.mainDark,
  borderRadius: vars.radius.md,
  padding: vars.spacing.ml,
  border: `2px solid ${vars.colors.point}`,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
});

export const formField = style({
  marginBottom: vars.spacing.md,
});

export const formActions = style({
  display: 'flex',
  gap: '12px',
  justifyContent: 'flex-end',
  paddingTop: vars.spacing.md,
  borderTop: `1px solid ${vars.colors.mainBorder}`,
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
