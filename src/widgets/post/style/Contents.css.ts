import { vars } from '@/vars.css';
import { style } from '@vanilla-extract/css';

export const originalMessage = style({
  padding: '16px 20px 16px',
  backgroundColor: vars.colors.mainXLight,
  margin: '0 16px 8px 16px',
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.colors.mainBorder}`,
});

export const messageHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '12px',
});

export const userAvatar = style({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: vars.colors.point,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: vars.font.size.lg,
  flexShrink: 0,
});

export const userInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const userName = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.semibold,
  color: vars.colors.white,
});

export const messageTime = style({
  fontSize: vars.font.size.xs,
  color: '#96989d',
});

export const messageContent = style({
  color: '#dcddde',
  fontSize: '15px',
  lineHeight: '1.5',
  marginBottom: '12px',
  marginLeft: '52px',
});

export const threadHeader = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '16px 20px 12px',
  borderBottom: `1px solid ${vars.colors.mainBorder}`,
  backgroundColor: vars.colors.mainLight,
  gap: '16px',
});

export const threadTitle = style({
  fontSize: vars.font.size['2xl'],
  fontWeight: vars.font.weight.bold,
  color: vars.colors.white,
  margin: '0 0 6px 0',
  lineHeight: '1.2',
});

export const userBadge = style({
  fontSize: '10px',
  fontWeight: vars.font.weight.bold,
  color: vars.colors.point,
  backgroundColor: 'rgba(88, 101, 242, 0.1)',
  padding: '2px 6px',
  borderRadius: vars.radius.md,
});
