import type { Post } from '@/widgets/board/types/board';

import { ContentsStyle } from '@/widgets/board/styles';

interface ContentsProps {
  post: Post;
}

export function Contents({ post }: ContentsProps) {
  const { title, writer, description, icon, createAt, isAdmin } = post;

  return (
    <div>
      <div className={ContentsStyle.threadHeader}>
        <div>
          <h1 className={ContentsStyle.threadTitle}>{title}</h1>
        </div>
      </div>
      <div className={ContentsStyle.originalMessage}>
        <div className={ContentsStyle.messageHeader}>
          <div className={ContentsStyle.userAvatar}>
            <img
              src={icon ? icon : '/icons/icon-board.svg'}
              style={{ width: '20px', height: '20px' }}
              alt={`${writer}의 프로필 사진`}
            />
          </div>
          <div className={ContentsStyle.userInfo}>
            <span className={ContentsStyle.userName}>
              {writer}
              {isAdmin && <span className={ContentsStyle.userBadge}>운영자</span>}
            </span>
            <span className={ContentsStyle.messageTime}>{createAt}</span>
          </div>
        </div>
        <div className={ContentsStyle.messageContent}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
