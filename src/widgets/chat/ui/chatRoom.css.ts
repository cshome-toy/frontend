
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
  minHeight: 0,                      
  flexDirection: 'column',
  justifyContent: 'flex-end',
  overflowY: 'auto',         
  padding: vars.spacing.md,
  backgroundColor: vars.colors.mainLight,
  boxSizing: 'border-box',
});

export const messageItem = style({
  display: 'flex',
  alignItems: 'flex-start',
  ':hover': {
    backgroundColor: vars.colors.mainXLight,
  },
  paddingTop: vars.spacing.xs,
  paddingLeft: vars.spacing.sm,
});

export const userInfoImage = style({
  width: '40px',
  height: '40px',
  borderRadius: '100%',
  marginRight: '12px',
});

export const MessageContent = style({
  display: 'flex',
  flexDirection: 'column',
});

export const meta = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  marginBottom: vars.spacing.xs,
  
});

export const username = style({
  fontWeight: vars.font.weight.bold,
  color: vars.colors.white,
  paddingRight: vars.spacing.sm,
});

export const timestamp = style({
  fontSize: vars.font.size.xs,
  color: vars.colors.subDark,
});

export const text = style({
  color: vars.colors.white,
});

export const textOnly = style({
  color: vars.colors.white,
  fontSize: vars.font.size.md,
  marginLeft: '52px', 
  lineHeight: '1.2',
  
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

