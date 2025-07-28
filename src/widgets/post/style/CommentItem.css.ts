import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const commentMessage = style({
  display: 'flex',
  gap: '12px',
  padding: '8px 20px',
  margin: vars.spacing.xs,
  borderRadius: vars.radius.sm,

  ':hover': {
    backgroundColor: 'rgba(79, 84, 92, 0.16)',
  },
});

export const commentAvatar = style({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  backgroundColor: vars.colors.point,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: vars.font.size.sm,
  flexShrink: 0,
});

export const commentContent = style({
  position: 'relative',
  flex: 1,
  minWidth: 0,
});

export const commentHeader = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: vars.spacing.sm,
  marginBottom: '2px',
});

export const commentAuthor = style({
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  color: vars.colors.white,
});

export const commentTime = style({
  fontSize: '11px',
  color: '#96989d',
});

export const commentText = style({
  color: '#dcddde',
  fontSize: vars.font.size.sm,
  lineHeight: '1.4',
  wordBreak: 'break-word',
});

export const deleteButton = style({
  position: 'absolute',
  top: 0,
  right: 0,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: vars.colors.subDark,
  textDecoration: 'underline',
  fontSize: vars.font.size.xs,
  ':hover': {
    opacity: 0.8,
  },
});
