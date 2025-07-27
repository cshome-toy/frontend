import { useState, useRef } from 'react';
import type { Comment } from '@/widgets/board/types/board';
import { mockPosts } from '@/shared/mock/board';
import { CommentInput } from './CommentInput';
import { CommentItem } from './CommentItem';
import { Contents } from './Contents';
import { detailContainer, messageArea, messagesContainer } from '../../styles/PostDetail/PostDetail.css';

interface PostDetailProps {
  postId: string;
}

export default function PostDetail({ postId }: PostDetailProps) {
  const post = mockPosts.find((p) => p.id === postId);
  const [comments, setComments] = useState<Comment[]>(post?.comments || []);
  const messageAreaRef = useRef<HTMLDivElement>(null);

  // 프로필 조회 로직
  //const myProfile = useProfile();

  const handleDelete = (id: string) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  if (!post) {
    return (
      <div className={detailContainer}>
        <div>포스트를 찾을 수 없습니다 😢</div>
      </div>
    );
  }

  return (
    <div className={detailContainer}>
      <div className={messageArea} ref={messageAreaRef}>
        <div className={messagesContainer}>
          <img
            src='/icons/icon-board_post.svg'
            style={{ marginLeft: '20px', width: '40px', height: '40px' }}
            alt='게시글'
          />
          <Contents post={post} />

          {comments.map((comment) => (
            // isMine 은 추후 myProfile과 비교하여 설정
            <CommentItem key={comment.id} comment={comment} isMine={true} onDelete={handleDelete} />
          ))}
        </div>
      </div>
      <CommentInput comments={comments} setComments={setComments} title={post.title} messageAreaRef={messageAreaRef} />
    </div>
  );
}
