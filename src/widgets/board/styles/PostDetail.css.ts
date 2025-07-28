import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const detailContainer = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.colors.mainLight,
});

export const messageArea = style({
  flex: 1,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column-reverse',
});

export const messagesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  padding: '32px 0px',
});
