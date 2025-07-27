import { useState, useEffect, useRef } from 'react';
import {
  chatWrapper,
  chatHeaderWrapper,
  chatHeader,
  chatMessageWrapper,
  chatInputWrapper,
  chatInput,
  chatHeaderText,
} from '@/widgets/chat/styles/chatRoom.css.ts';
import { CHANNEL_LIST } from '@/shared/mock/server';
import { USER } from '@/shared/mock/user';
import MessageItem from '@/widgets/chat/ui/MessageItem';
import type { Message } from '@/shared/types/message';

export default function ChatRoom({
  serverTitle,
  chatRoomId,
}: {
  serverTitle: string;
  chatRoomId: string;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([]);
  }, [chatRoomId]);

  useEffect(() => {
  setTimeout(() => {
    const el = messageListRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, 0);
}, [messages]);

  const handleSend = () => {
    const txt = inputRef.current?.value.trim();
    if (!txt) return;
    setMessages((prev) => [
      ...prev,
      {
        user: USER,
        content: txt,
        timestamp: nowStamp(),
      },
    ]);
    inputRef.current!.value = '';
  };

  const nowStamp = () =>
    new Date()
      .toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
      .replace(/\.\s?/g, '-')
      .replace(/\.$/, '');

  const channel = CHANNEL_LIST[serverTitle]?.chat.items.find(
    (c) => c.id === chatRoomId
  );
  const title = channel?.title ?? chatRoomId;

  return (
    <div className={chatWrapper}>
      <div className={chatHeaderWrapper}>
        <header className={chatHeader}>
          <span className={chatHeaderText}>#</span>
          <p>{title}</p>
        </header>
      </div>

      <div className={chatMessageWrapper} ref={messageListRef}>
        {messages.map((msg, i) => {
          const prev = messages[i - 1];
          const sameGroup =
            i > 0 &&
            prev.user.name === msg.user.name &&
            prev.timestamp === msg.timestamp;

          return (
            <MessageItem key={i} msg={msg} sameGroup={sameGroup} index={i} />
          );
        })}
      </div>

      <div className={chatInputWrapper}>
        <input
          ref={inputRef}
          className={chatInput}
          placeholder={`# ${title}로 메세지를 보내세요`}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSend();
            }
          }}
        />
      </div>
    </div>
  );
}
