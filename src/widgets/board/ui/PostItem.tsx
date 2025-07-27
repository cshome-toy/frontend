import {
  postItem,
  postItemSelected,
  postHeader,
  postTitle,
  postTime,
  postMeta,
  postDescription,
  postActions,
  actionBtn,
  postIconSpan,
} from '../styles/PostItem.css';
import type { Post } from '@/widgets/board/types/board';

interface PostItemProps {
  post: Post;
  onClick: (id: string) => void;
  isSelected?: boolean;
}

const PostItem = ({ post, onClick, isSelected = false }: PostItemProps) => {
  const { title, createAt, description, comments, id, writer } = post;

  const postItemClassName = [postItem, isSelected && postItemSelected].filter(Boolean).join(' ');

  const handleClickPost = () => {
    onClick(id);
  };
  return (
    <div className={postItemClassName} onClick={handleClickPost}>
      <div className={postHeader}>
        <h3 className={postTitle}>{title}</h3>
      </div>
      <div className={postMeta}>
        {writer} : <span className={postDescription}>{description}</span>
      </div>

      <div className={postActions}>
        <button type='button' className={actionBtn}>
          <span className={postIconSpan}>
            <img src='/icons/icon-board_post.svg' alt='포스트 아이콘' style={{ width: '15px', height: '15px' }} />
            {comments.length}
          </span>
          <span className={postTime}>{createAt}</span>
        </button>
      </div>
    </div>
  );
};

export default PostItem;
