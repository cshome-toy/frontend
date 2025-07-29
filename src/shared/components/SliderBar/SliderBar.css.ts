import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const SliderBarStyle = style({
  width: '6px',
  backgroundColor: vars.colors.mainDark,
  cursor: 'col-resize',
  position: 'relative',
  transition: 'background-color 0.2s',

  ':hover': {
    backgroundColor: vars.colors.point,
  },

  '::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '8px',
    height: '20px',
    backgroundColor: 'transparent',
    borderLeft: `1px solid ${vars.colors.sub}`,
    borderRight: `1px solid ${vars.colors.sub}`,
  },
});
