import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const container = style({
  minHeight: '100vh',
  width: '100%',
  margin: '0px',
  display: 'flex',
  flexDirection: 'column',
});

export const mainContent = style({
  width: '100%',
  height: calc.subtract('100vh', '32px'),
  backgroundColor: vars.colors.mainLight,
  borderTop: `1px solid ${vars.colors.mainBorder}`,
});
