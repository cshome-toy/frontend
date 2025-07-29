import type { Comment } from '@/widgets/board/types/board';

import { CommentItemStyle } from '@/widgets/post/style';
import { userBadge } from '@/widgets/post/style/Contents.css';

interface CommentItemProps {
  comment: Comment;
  onDelete?: (commentId: string) => void;
  isMine?: boolean;
}

export const CommentItem = ({ comment, onDelete, isMine }: CommentItemProps) => {
  const { id, writer, createAt, content, icon, isOwner } = comment;

  return (
    <div className={CommentItemStyle.commentMessage}>
      <div className={CommentItemStyle.commentAvatar}>
        <img src={icon ? icon : '/icons/icon-board.svg'} width={20} height={20} alt={writer} />
      </div>
      <div className={CommentItemStyle.commentContent}>
        <div className={CommentItemStyle.commentHeader}>
          <span className={CommentItemStyle.commentAuthor}>{writer}</span>
          {isOwner && <span className={userBadge}>작성자</span>}
          <span className={CommentItemStyle.commentTime}>{createAt}</span>
        </div>
        <div className={CommentItemStyle.commentText}>{content}</div>
        {isMine && onDelete && (
          <button className={CommentItemStyle.deleteButton} onClick={() => onDelete(id)} aria-label='댓글 삭제'>
            삭제
          </button>
        )}
      </div>
    </div>
  );
};
