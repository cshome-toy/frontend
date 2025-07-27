import { style } from '@vanilla-extract/css';
import { vars } from '@/vars.css';

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

export const text = style({
  color: vars.colors.white,
});

export const textOnly = style({
  color: vars.colors.white,
  fontSize: vars.font.size.md,
  marginLeft: '52px', 
  lineHeight: '1.2',
  
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