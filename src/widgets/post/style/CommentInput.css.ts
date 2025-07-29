import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const messageInputContainer = style({
  padding: '16px 16px 20px',
  backgroundColor: vars.colors.mainLight,
  borderTop: 'none',
  position: 'sticky',
  bottom: 0,
  zIndex: 1,
});

export const inputWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  backgroundColor: vars.colors.mainDark,
  borderRadius: '24px',
  padding: '8px 12px',
  border: `1px solid ${vars.colors.mainBorder}`,
  transition: 'border-color 0.2s',

  ':focus-within': {
    borderColor: vars.colors.point,
  },
});

export const inputAvatar = style({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: vars.colors.point,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: vars.font.size.xs,
  flexShrink: 0,
});

export const messageInput = style({
  flex: 1,
  backgroundColor: 'transparent',
  border: 'none',
  color: '#dcddde',
  fontSize: vars.font.size.sm,
  fontFamily: vars.font.family.primary,
  resize: 'none',
  outline: 'none',
  maxHeight: '100px',

  '::placeholder': {
    color: '#96989d',
  },
});

export const sendButton = style({
  background: 'transparent',
  border: 'none',
  color: '#96989d',
  cursor: 'pointer',
  fontSize: vars.font.size.md,
  padding: '4px',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s',

  ':disabled': {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
});
