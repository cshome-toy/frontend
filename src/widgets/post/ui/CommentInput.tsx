import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import CharacterCounter from '@/shared/components/CharacterCounter/CharacterCounter';

import { INPUT_CONFIG } from '@/shared/constants/board';

import { type Comment } from '@/widgets/board/types/board';

import { CommentInputStyle } from '@/widgets/post/style';

interface CommentInputProps {
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  title: string;
  messageAreaRef: React.RefObject<HTMLDivElement | null>;
}

interface FormData {
  content: string;
}

export const CommentInput = ({ comments, setComments, title, messageAreaRef }: CommentInputProps) => {
  const { register, handleSubmit, watch, reset } = useForm<FormData>({
    defaultValues: { content: '' },
  });

  const content = watch('content');
  const contentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (messageAreaRef.current) {
        messageAreaRef.current.scrollTop = 0;
      }
    }, INPUT_CONFIG.SCROLL_DELAY);
  }, [comments]);

  useEffect(() => {
    const textarea = contentRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, INPUT_CONFIG.MAX_HEIGHT) + 'px';
    }
  }, [content]);

  const onSubmit = (data: FormData) => {
    if (!data.content.trim()) return;

    const comment: Comment = {
      id: `comment-${Date.now()}`,
      writer: '이름',
      content: data.content,
      createAt: '방금 전',
      isOwner: true,
      icon: null,
    };

    setComments((prev) => [...prev, comment]);
    reset();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  const currentLength = content.length;
  const { ref, ...contentRegister } = register('content');

  return (
    <div className={CommentInputStyle.messageInputContainer}>
      <form className={CommentInputStyle.inputWrapper} onSubmit={handleSubmit(onSubmit)}>
        <div className={CommentInputStyle.inputAvatar}>
          <img src='/icons/icon-board.svg' style={{ width: '20px', height: '20px' }} />
        </div>
        <textarea
          ref={(e) => {
            contentRef.current = e;
            ref(e);
          }}
          className={CommentInputStyle.messageInput}
          placeholder={`#${title}에 메시지 보내기`}
          rows={INPUT_CONFIG.DEFAULT_ROWS}
          aria-label={`${title} 채널에 댓글 작성`}
          onKeyDown={handleKeyDown}
          {...contentRegister}
        />
        <CharacterCounter currentLength={currentLength} maxCharacters={INPUT_CONFIG.MAX_CHARACTERS} />
        <button type='submit' className={CommentInputStyle.sendButton} disabled={!content.trim()}>
          ➤
        </button>
      </form>
    </div>
  );
};
