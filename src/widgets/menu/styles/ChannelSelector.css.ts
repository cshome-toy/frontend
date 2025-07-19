import { style } from '@vanilla-extract/css';
import { vars } from '@/vars.css';
import { calc } from '@vanilla-extract/css-utils';

export const channelSelectorWrapper = style({
  width: '286px',
  flexShrink: 0,
  height: calc.subtract('100vh', '32px'),
  backgroundColor: vars.colors.mainDark,
});

export const channelSelector = style({
  width: '100%',
  height: calc.subtract('100%', '32px'),
  backgroundColor: vars.colors.mainDark,
  borderRadius: vars.radius.md,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  border: `1px solid ${vars.colors.mainBorder}`,
  borderRight: 'none',
  borderBottom: 'none',
});

export const channelSelectorHeader = style({
  height: '50px',
  paddingLeft: vars.spacing.ml,
  display: 'flex',
  alignItems: 'center',
  color: vars.colors.sub,
  fontWeight: vars.font.weight.bold,
  borderBottom: `1px solid ${vars.colors.mainBorder}`,
});
