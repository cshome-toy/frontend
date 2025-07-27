import {
    channelSelectorIcon,
    channelSelectorIconActive,
    channelSelectorItem,
    channelSelectorItemActive
 } from '@/widgets/menu/styles';
import type { FC } from 'react';

interface ChannelButtonProps {
  id: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const ChannelButton: FC<ChannelButtonProps> = ({ id, title, isActive, onClick }) => {
  return (
    <button
      key={id}
      className={`${channelSelectorItem} ${isActive ? channelSelectorItemActive : ''}`}
      onClick={onClick}
    >
      <img
        src="/icons/icon-chat.svg"
        alt="channel"
        className={`${channelSelectorIcon} ${isActive ? channelSelectorIconActive : ''}`}
        style={{ width: 20, height: 20 }}
      />
      <span>{title}</span>
    </button>
  );
};

export default ChannelButton;
