import { useState } from 'react';
import { newPostBtn, searchContainer, searchInput } from '../styles/PostSearch.css';
import { PostForm } from './PostForm';

export function PostSearch() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState('');

  const handleExpand = () => {
    setIsExpanded(true);
  };

  if (isExpanded) {
    return <PostForm setIsExpanded={setIsExpanded} title={title} setTitle={setTitle} />;
  }

  return (
    <div className={searchContainer}>
      <img
        src='/icons/icon-search.svg'
        style={{ transform: 'scaleX(-1)', width: '25px', height: '25px' }}
        alt='검색 아이콘'
      />
      <input
        type='text'
        placeholder='포스트 검색 또는 생성...'
        className={searchInput}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className={newPostBtn} onClick={handleExpand}>
        <img src='/icons/icon-board_post.svg' style={{ width: '20px', height: '20px' }} alt='포스트 아이콘' />새 포스트
      </button>
    </div>
  );
}
