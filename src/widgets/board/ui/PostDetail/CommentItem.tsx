import type { Comment } from '@/widgets/board/types/board';
import {
  commentMessage,
  commentAvatar,
  commentContent,
  commentHeader,
  commentAuthor,
  commentTime,
  commentText,
  deleteButton,
} from '../../styles/PostDetail/CommentItem.css';

interface CommentItemProps {
  comment: Comment;
  onDelete?: (commentId: string) => void;
  isMine?: boolean;
}

export const CommentItem = ({ comment, onDelete, isMine }: CommentItemProps) => {
  const { id, writer, createAt, content, icon } = comment;

  return (
    <div className={commentMessage}>
      <div className={commentAvatar}>
        <img src={icon ? icon : '/icons/icon-board.svg'} width={20} height={20} alt={writer} />
      </div>
      <div className={commentContent}>
        <div className={commentHeader}>
          <span className={commentAuthor}>{writer}</span>
          <span className={commentTime}>{createAt}</span>
        </div>
        <div className={commentText}>{content}</div>
        {isMine && onDelete && (
          <button className={deleteButton} onClick={() => onDelete(id)} aria-label='댓글 삭제'>
            삭제
          </button>
        )}
      </div>
    </div>
  );
};
