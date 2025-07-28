
import { style } from '@vanilla-extract/css';
import { vars } from '@/vars.css';
import { calc } from '@vanilla-extract/css-utils';
export const chatWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: calc.subtract('100vh', '3vh'), 
  boxSizing: 'border-box',
});

export const chatHeaderWrapper = style({
  flex: '0 0 50px',
  backgroundColor: vars.colors.mainLight,
  borderBottom: `1px solid ${vars.colors.mainBorder}`,
});

export const chatHeader = style({
  height: '100%',
  paddingLeft: vars.spacing.ml,
  display: 'flex',
  alignItems: 'center',
  color: vars.colors.sub,
  fontWeight: vars.font.weight.bold,
  boxSizing: 'border-box',
});

export const chatHeaderText = style({
  fontSize: vars.font.size.md,
  color: vars.colors.subDark,
  marginRight: vars.spacing.sm,
});


export const chatMessageWrapper = style({
  flex: '1 1 auto',
  display: 'flex',
  minHeight: 0,                      
  flexDirection: 'column',
  justifyContent: 'flex-end',
  overflowY: 'auto',         
  padding: vars.spacing.md,
  backgroundColor: vars.colors.mainLight,
  boxSizing: 'border-box',
});

export const chatInputWrapper = style({
  flex: '0 0 70px',
  padding: '8px 16px',
  borderTop: `1px solid ${vars.colors.mainBorder}`,
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  backgroundColor: vars.colors.mainLight,
});
export const chatInput = style({
  height: '40px',
  flex: '1 1 auto',
  backgroundColor: vars.colors.mainXLight,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.colors.mainBorder}`,
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  color: vars.colors.sub,
});

export const chatWelcome = style({
  textAlign: 'left',
  color: vars.colors.white,
});

export const chatWelcomeTitle = style({
  fontSize: vars.font.size['3xl'],
  fontWeight: vars.font.weight.bold,
});

export const chatWelcomeSub = style({
  fontSize: vars.font.size.lg,
  marginTop: '8px',
});

export const chatDateDivider = style({
  display: 'flex',
  alignItems: 'center',
  margin: '20px 0',
  color: vars.colors.subDark,
  fontSize: vars.font.size.sm,
});

export const chatHr = style({
  flex: 1,
  border: 0,
  borderTop: `1px solid ${vars.colors.mainBorder}`,
});
export const chatWelcomeShape = style({
  width: '70px',
  height: '70px',
  borderRadius: '100%',
  backgroundColor: vars.colors.subDark,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: vars.spacing.sm,
  
});
export const chatWelcomeIamge = style({
  width: '45px',
  height: '45px',
  filter: 'brightness(0) invert(1)',
});
