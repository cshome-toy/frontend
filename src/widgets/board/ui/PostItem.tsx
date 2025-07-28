import type { Post } from '@/widgets/board/types/board';

import { PostItemStyle } from '@/widgets/board/styles';

interface PostItemProps {
  post: Post;
  onClick: (id: string) => void;
  isSelected?: boolean;
}

const PostItem = ({ post, onClick, isSelected = false }: PostItemProps) => {
  const { title, createAt, description, comments, id, writer } = post;

  const postItemClassName = [PostItemStyle.postItem, isSelected && PostItemStyle.postItemSelected]
    .filter(Boolean)
    .join(' ');

  const handleClickPost = () => {
    onClick(id);
  };
  return (
    <div className={postItemClassName} onClick={handleClickPost}>
      <div className={PostItemStyle.postHeader}>
        <h3 className={PostItemStyle.postTitle}>{title}</h3>
      </div>
      <div className={PostItemStyle.postMeta}>
        {writer} : <span className={PostItemStyle.postDescription}>{description}</span>
      </div>

      <div className={PostItemStyle.postActions}>
        <button type='button' className={PostItemStyle.actionBtn}>
          <span className={PostItemStyle.postIconSpan}>
            <img src='/icons/icon-board_post.svg' alt='포스트 아이콘' style={{ width: '15px', height: '15px' }} />
            {comments.length}
          </span>
          <span className={PostItemStyle.postTime}>{createAt}</span>
        </button>
      </div>
    </div>
  );
};

export { PostItem };
