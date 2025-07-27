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

export const channelSelectorList = style({
  // paddingLeft: vars.spacing.sm,
  paddingRight: vars.spacing.sm,
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const channelSelectorItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  color: vars.colors.subDark,
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.bold,
  padding: vars.spacing.sm,
  borderRadius: vars.radius.md,
  ':hover': {
    backgroundColor: vars.colors.mainLight,
  },
});

export const channelSelectorItemActive = style({
  color: vars.colors.white,
  backgroundColor: vars.colors.mainXLight,
});

export const channelSelectorIcon = style({
  filter:
    'brightness(0) saturate(100%) invert(48%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)',
});

export const channelSelectorIconActive = style({
  filter: 'brightness(0) invert(1)',
});

export const categoryHeader = style({
  all: 'unset',                
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,        
  padding: vars.spacing.sm,
  cursor: 'pointer',
  color: vars.colors.subDark,  
  ':hover': {
      color: vars.colors.sub,       
    },
})
export const Image = style({
  width: '20px',
  height: '20px',
  marginLeft: '-2px',
  marginTop: '6px',
  borderRadius: vars.radius.sm,
  objectFit: 'cover',
  objectPosition: 'center',
  
});