import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const authBackground = style({
  inset: 0,
});

export const authLogo = style({
  position: 'absolute',
  top: vars.spacing.authLogo,
  left: vars.spacing.authLogo,
});

export const authContainerWrapper = style({
  position: 'absolute',
  inset: 0,
  display: 'grid',
  placeItems: 'center',
});

export const authContainer = style({
  width: 'fit-content',
  maxWidth: '784px',
  height: 'fit-content',
  maxHeight: '746px',
  backgroundColor: vars.colors.main,
  borderRadius: vars.radius.md,
  padding: vars.spacing.xl,
  color: vars.colors.white,
  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.2)',
});

export const authContainerTitle = style({
  fontSize: '24px',
  fontWeight: '700',
  width: '100%',
  textAlign: 'center',
});

export const authFormWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  width: '100%',
});

export const authForm = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  marginTop: vars.spacing.lg,
});

export const authFormAtag = style({
  width: '100%',
  textAlign: 'start',
  textDecoration: 'none',
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  color: vars.colors.pointLight,
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const authFormPtag = style({
  textAlign: 'start',
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  color: vars.colors.sub,
  width: '100%',
  marginTop: vars.spacing.xs,
  lineHeight: '1.4',
});

export const authFormButton = style({
  height: '48px',
  borderRadius: vars.radius.md,
  backgroundColor: vars.colors.pointLight,
  color: vars.colors.white,
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.bold,
});
