import type { FC } from 'react';
import type { Message } from '@/widgets/chat/types';
import {
  messageItem,
  userInfoImage,
  MessageContent,
  text,
  textOnly,
  meta,
  username,
  timestamp,
} from '@/widgets/chat/styles/MessageItem.css.ts';

interface MessageItemProps {
  msg: Message;
  sameGroup: boolean;
  index: number;
}

const MessageItem: FC<MessageItemProps> = ({ msg, sameGroup, index }) => {
  return sameGroup ? (
    <div key={index} className={messageItem}>
      <div className={MessageContent}>
        <div className={textOnly}>{msg.content}</div>
      </div>
    </div>
  ) : (
    <div key={index} className={messageItem}>
      <img className={userInfoImage} src={msg.user.image} alt={msg.user.name} />
      <div className={MessageContent}>
        <div className={meta}>
          <span className={username}>{msg.user.name}</span>
          <span className={timestamp}>{msg.timestamp}</span>
        </div>
        <div className={text}>{msg.content}</div>
      </div>
    </div>
  );
};

export default MessageItem;
