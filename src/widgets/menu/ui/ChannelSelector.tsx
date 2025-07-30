import { useReducer } from 'react';

import { BOARD_LIST, CHAT_LIST } from '@/shared/mock';
import {
  categoryHeader,
  categoryHeaderIcon,
  channelSelector,
  channelSelectorHeader,
  channelSelectorIcon,
  channelSelectorIconActive,
  channelSelectorItem,
  channelSelectorItemActive,
  channelSelectorList,
  channelSelectorWrapper,
} from '@/widgets/menu/styles';
import { useLocation, useNavigate } from '@tanstack/react-router';
import { motion } from 'motion/react';

interface CategoryHeaderProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

interface ChannelItemProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
  icon: string;
}

export default function ChannelSelector() {
  const [isOpen, setIsOpen] = useReducer(
    (prev: { board: boolean; chat: boolean }, action: { type: 'board' | 'chat' }) => {
      if (action.type === 'board') {
        return { board: !prev.board, chat: prev.chat };
      }
      return { board: prev.board, chat: !prev.chat };
    },
    { board: true, chat: true }
  );

  const current = useLocation().pathname;
  const navigate = useNavigate();
  const title = current.split('/')[1];

  const chatList = CHAT_LIST[title];
  const boardList = BOARD_LIST[title];

  return (
    <div className={channelSelectorWrapper}>
      <div className={channelSelector}>
        {title && <div className={channelSelectorHeader}>{title}</div>}
        {boardList && (
          <div className={channelSelectorList}>
            <CategoryHeader title='게시판 채널' isOpen={isOpen.board} onClick={() => setIsOpen({ type: 'board' })} />
            {isOpen.board &&
              boardList.map(({ id, title: boardTitle }) => (
                <ChannelItem
                  key={id}
                  title={boardTitle}
                  isActive={current.includes(boardTitle)}
                  onClick={() => navigate({ to: `${title}/board/${boardTitle}` })}
                  icon='/icons/icon-board.svg'
                />
              ))}
          </div>
        )}
        {chatList && (
          <div className={channelSelectorList}>
            <CategoryHeader title='채팅 채널' isOpen={isOpen.chat} onClick={() => setIsOpen({ type: 'chat' })} />
            {isOpen.chat &&
              chatList.map(({ id, title: channelTitle }) => (
                <ChannelItem
                  key={id}
                  title={channelTitle}
                  isActive={current.includes(id)}
                  onClick={() => navigate({ to: `${title}/chat/${id}` })}
                  icon='/icons/icon-chat.svg'
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

const CategoryHeader = ({ title, isOpen, onClick }: CategoryHeaderProps) => {
  return (
    <button className={categoryHeader} onClick={onClick}>
      {title}
      <motion.img
        className={categoryHeaderIcon}
        src='/icons/icon-chevronright.svg'
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </button>
  );
};

const ChannelItem = ({ title, isActive, onClick, icon }: ChannelItemProps) => {
  return (
    <button className={`${channelSelectorItem} ${isActive && channelSelectorItemActive}`} onClick={onClick}>
      <img
        src={icon}
        alt={title}
        className={`${channelSelectorIcon} ${isActive && channelSelectorIconActive}`}
        style={{ width: '20px', height: '20px' }}
      />
      <span>{title}</span>
    </button>
  );
};
