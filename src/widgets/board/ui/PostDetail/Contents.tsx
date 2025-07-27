import type { Post } from '@/widgets/board/types/board';
import {
  threadHeader,
  threadTitle,
  originalMessage,
  messageHeader,
  userAvatar,
  userName,
  userInfo,
  messageTime,
  messageContent,
} from '../../styles/PostDetail/Contents.css';
import { userBadge } from '../../styles/PostDetail/PostDetail.css';

interface ContentsProps {
  post: Post;
}

export function Contents({ post }: ContentsProps) {
  const { title, writer, description, icon, createAt, isAdmin } = post;

  return (
    <div>
      <div className={threadHeader}>
        <div>
          <h1 className={threadTitle}>{title}</h1>
        </div>
      </div>
      <div className={originalMessage}>
        <div className={messageHeader}>
          <div className={userAvatar}>
            <img
              src={icon ? icon : '/icons/icon-board.svg'}
              style={{ width: '20px', height: '20px' }}
              alt={`${writer}의 프로필 사진`}
            />
          </div>
          <div className={userInfo}>
            <span className={userName}>
              {writer}
              {isAdmin && <span className={userBadge}>운영자</span>}
            </span>
            <span className={messageTime}>{createAt}</span>
          </div>
        </div>
        <div className={messageContent}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
