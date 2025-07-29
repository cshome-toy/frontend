import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/shared/components/Button';
import CharacterCounter from '@/shared/components/CharacterCounter';

import { FORM_CONFIG } from '@/shared/constants/board';

import { PostFormStyle } from '@/widgets/board/styles';

interface PostFormProps {
  setIsExpanded: (isExpanded: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
}

interface FormData {
  title: string;
  content: string;
}

export const PostForm = ({ setIsExpanded, title: initialTitle, setTitle }: PostFormProps) => {
  const { register, handleSubmit, reset, watch, setValue } = useForm<FormData>({
    defaultValues: {
      title: initialTitle,
      content: '',
    },
  });

  const contentRef = useRef<HTMLTextAreaElement>(null);
  const title = watch('title');
  const content = watch('content');
  const titleCurrentLength = title.length;
  const contentCurrentLength = content.length;

  useEffect(() => {
    setValue('title', initialTitle);
  }, [initialTitle, setValue]);

  useEffect(() => {
    const textarea = contentRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, FORM_CONFIG.MAX_TEXTAREA_HEIGHT) + 'px';
    }
  }, [content]);

  const handleCollapse = () => {
    setIsExpanded(false);
    setTitle('');
    reset();
  };

  const onSubmit = (data: FormData) => {
    if (data.title.trim() && data.content.trim()) {
      console.log('폼 제출:', data);
      handleCollapse();
    }
  };

  const isValid = !!(title.trim() && content.trim());

  const { ref, ...contentRegister } = register('content');

  return (
    <div className={PostFormStyle.expandedContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={PostFormStyle.formField}>
          <input
            type='text'
            className={PostFormStyle.titleInput}
            placeholder='포스트 제목을 입력하세요...'
            autoFocus
            aria-label='포스트 제목'
            aria-describedby='title-counter'
            {...register('title')}
          />
          <div id='title-counter'>
            <CharacterCounter currentLength={titleCurrentLength} maxCharacters={FORM_CONFIG.MAX_TITLE_SIZE} />
          </div>
        </div>
        <div className={PostFormStyle.formField}>
          <textarea
            ref={(e) => {
              ref(e);
              contentRef.current = e;
            }}
            className={PostFormStyle.contentTextarea}
            placeholder='포스트 내용을 입력하세요...'
            rows={4}
            aria-label='포스트 내용'
            aria-describedby='content-counter'
            {...contentRegister}
          />
          <div id='content-counter'>
            <CharacterCounter currentLength={contentCurrentLength} maxCharacters={FORM_CONFIG.MAX_CONTENT_SIZE} />
          </div>
        </div>
        <div className={PostFormStyle.formActions}>
          <Button onClick={handleCollapse} variant='main' size='sm' aria-label='포스트 작성 취소'>
            취소
          </Button>
          <Button type='submit' disabled={!isValid} variant='point' size='sm' aria-label='포스트 등록'>
            <img src='/icons/icon-board_post.svg' alt='' style={{ width: '25px', height: '25px' }} /> 포스트
          </Button>
        </div>
      </form>
    </div>
  );
};
