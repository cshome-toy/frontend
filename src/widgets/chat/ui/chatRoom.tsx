import { useState, useEffect, useRef } from 'react';
import {
  chatWrapper,
  chatHeaderWrapper,
  chatHeader,
  chatMessageWrapper,
  chatInputWrapper,
  chatInput,
  chatHeaderText,
  chatWelcome,
  chatWelcomeTitle,
  chatWelcomeSub,
  chatDateDivider,
  chatHr,
  chatWelcomeShape,
  chatWelcomeIamge,
} from '@/widgets/chat/styles/chatRoom.css.ts';
import { CHAT_LIST } from '@/shared/mock/server';
import { USER } from '@/shared/mock/user';
import MessageItem from '@/widgets/chat/ui/MessageItem';
import type { Message } from '@/widgets/chat/types';

export default function ChatRoom({ serverTitle, chatRoomId }: { serverTitle: string; chatRoomId: string }) {
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
  const extractDate = (timestamp: string) => {
    return timestamp.split('-오전')[0]?.split('-오후')[0] ?? '';
  };
  const channel = CHAT_LIST[serverTitle]?.find((c) => c.id === chatRoomId);
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
        <div className={chatWelcome}>
          <div className={chatWelcomeShape}>
            <img src='/icons/icon-chat.svg' alt='channel' className={chatWelcomeIamge} />
          </div>
          <p className={chatWelcomeTitle}>#{title}에 오신 걸 환영합니다!</p>
          <p className={chatWelcomeSub}>#{title} 채널의 시작이에요.</p>
        </div>

        {messages.map((msg, i) => {
          const prev = messages[i - 1];
          const sameGroup = i > 0 && prev.user.name === msg.user.name && prev.timestamp === msg.timestamp;
          const currentDate = extractDate(msg.timestamp);
          const prevDate = prev ? extractDate(prev.timestamp) : null;
          const isNewDate = currentDate !== prevDate;
          return (
            <div key={i}>
              {isNewDate && (
                <div className={chatDateDivider}>
                  <hr className={chatHr} />
                  <span>{currentDate.replace(/-/g, '년 ').replace(/$/, '일')}</span>
                  <hr className={chatHr} />
                </div>
              )}
              <MessageItem msg={msg} sameGroup={sameGroup} index={i} />
            </div>
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
