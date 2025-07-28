import { useRef, useEffect, useState } from 'react';

import { CharacterCounter } from '@/widgets/board/ui/CharacterCounter';

import { INPUT_CONFIG } from '@/shared/constants/board';

import { type Comment } from '@/widgets/board/types/board';

import { CommentInputStyle } from '@/widgets/board/styles';

interface CommentInputProps {
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  title: string;
  messageAreaRef: React.RefObject<HTMLDivElement | null>;
}

export const CommentInput = ({ comments, setComments, title, messageAreaRef }: CommentInputProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [newComment, setNewComment] = useState('');

  const currentLength = newComment.length;

  useEffect(() => {
    setTimeout(() => {
      if (messageAreaRef.current) {
        messageAreaRef.current.scrollTop = 0;
      }
    }, INPUT_CONFIG.SCROLL_DELAY);
  }, [comments, messageAreaRef]);

  useEffect(() => {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, INPUT_CONFIG.MAX_HEIGHT) + 'px';
    }
  }, [newComment]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= INPUT_CONFIG.MAX_CHARACTERS) {
      setNewComment(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: `comment-${Date.now()}`,
      writer: '이름',
      content: newComment,
      createAt: '방금 전',
      isOwner: true,
      icon: null,
    };

    setComments((prev) => [...prev, comment]);
    setNewComment('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className={CommentInputStyle.messageInputContainer}>
      <form className={CommentInputStyle.inputWrapper} onSubmit={handleSubmit}>
        <div className={CommentInputStyle.inputAvatar}>
          <img src='/icons/icon-board.svg' style={{ width: '20px', height: '20px' }} />
        </div>
        <textarea
          ref={inputRef}
          className={CommentInputStyle.messageInput}
          value={newComment}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={`#${title}에 메시지 보내기`}
          rows={INPUT_CONFIG.DEFAULT_ROWS}
          aria-label={`${title} 채널에 댓글 작성`}
        />
        <CharacterCounter currentLength={currentLength} maxCharacters={INPUT_CONFIG.MAX_CHARACTERS} />
        <button type='submit' className={CommentInputStyle.sendButton} disabled={!newComment.trim()}>
          ➤
        </button>
      </form>
    </div>
  );
};
