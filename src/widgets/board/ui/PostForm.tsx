import { useEffect, useRef, useState } from 'react';
import Button from '@/shared/components/Button';
import { expandedContainer, formField, titleInput, contentTextarea, formActions } from '../styles/PostForm.css';
import { CharacterCounter } from './CharacterCounter';
import { FORM_CONFIG } from '@/shared/constants/board';

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
  const [formData, setFormData] = useState<FormData>({
    title: initialTitle,
    content: '',
  });

  const { title, content } = formData;

  const titleCurrentLength = title.length;
  const contentCurrentLength = content.length;
  const contentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      title: initialTitle,
    }));
  }, [initialTitle]);

  const handleCollapse = () => {
    setIsExpanded(false);
    setTitle('');
    setFormData({ title: '', content: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const textarea = contentRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, FORM_CONFIG.MAX_TEXTAREA_HEIGHT) + 'px';
    }
  }, [content]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      console.log('폼 제출:', formData);
      handleCollapse();
    }
  };

  const isValid = !!(title.trim() && content.trim());

  return (
    <div className={expandedContainer}>
      <form onSubmit={handleSubmit}>
        <div className={formField}>
          <input
            type='text'
            name='title'
            className={titleInput}
            value={title}
            onChange={handleInputChange}
            placeholder='포스트 제목을 입력하세요...'
            autoFocus
          />
          <CharacterCounter currentLength={titleCurrentLength} maxCharacters={FORM_CONFIG.MAX_TITLE_SIZE} />
        </div>

        <div className={formField}>
          <textarea
            ref={contentRef}
            name='content'
            className={contentTextarea}
            value={content}
            onChange={handleInputChange}
            placeholder='포스트 내용을 입력하세요...'
            rows={4}
          />
          <CharacterCounter currentLength={contentCurrentLength} maxCharacters={FORM_CONFIG.MAX_CONTENT_SIZE} />
        </div>

        <div className={formActions}>
          <Button onClick={handleCollapse} variant='main' size='sm'>
            취소
          </Button>
          <Button type='submit' disabled={!isValid} variant='point' size='sm'>
            <img src='/icons/icon-board_post.svg' alt='포스트 아이콘' style={{ width: '25px', height: '25px' }} />{' '}
            포스트
          </Button>
        </div>
      </form>
    </div>
  );
};
