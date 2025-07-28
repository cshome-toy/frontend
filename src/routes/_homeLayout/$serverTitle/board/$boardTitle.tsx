import { useState, useEffect, useRef } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { SliderBar } from '@/shared/components/SliderBar';
import { PostItem } from '@/widgets/board/ui/PostItem';
import { PostSearch } from '@/widgets/board/ui/PostSearch';
import { PostDetail } from '@/widgets/board/ui/PostDetail';

import { LAYOUT_CONFIG } from '@/shared/constants/board';
import { mockPosts } from '@/shared/mock/board';

import { BoardStyle } from '@/widgets/board/styles';

export const Route = createFileRoute('/_homeLayout/$serverTitle/board/$boardTitle')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => ({
    postId: search.postId as string | undefined,
  }),
});

function RouteComponent() {
  const { boardTitle, serverTitle } = Route.useParams();
  const { postId } = Route.useSearch();
  const navigate = useNavigate();

  const showDetail = !!postId;
  const [listWidth, setListWidth] = useState<number>(LAYOUT_CONFIG.FULL_WIDTH);
  const isFullscreen = !showDetail;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (postId) {
      navigate({
        to: `/${serverTitle}/board/${boardTitle}`,
        search: {},
        replace: true,
      });
    }
  }, []);

  const navigateToBoardDetail = (id: string) => {
    if (listWidth === LAYOUT_CONFIG.FULL_WIDTH) {
      setListWidth(LAYOUT_CONFIG.SPLIT_LIST_WIDTH);
    }
    navigate({
      to: `/${serverTitle}/board/${boardTitle}`,
      search: { postId: id },
    });
  };

  const closeDetail = () => {
    setListWidth(LAYOUT_CONFIG.FULL_WIDTH);
    navigate({
      to: `/${serverTitle}/board/${boardTitle}`,
      search: {},
    });
  };

  return (
    <div className={BoardStyle.splitContainer} ref={containerRef}>
      <div
        className={isFullscreen ? BoardStyle.listSectionFullscreen : BoardStyle.listSection}
        style={{ width: isFullscreen ? '100%' : `${listWidth}%` }}
      >
        <div className={BoardStyle.header}>
          <div className={BoardStyle.headerTitle}>
            <img src='/icons/icon-board.svg' style={{ width: '20px', height: '20px' }} alt='게시판 아이콘' />
            {boardTitle}
          </div>
        </div>

        <PostSearch />

        <div className={BoardStyle.postsList}>
          {mockPosts.map((post) => (
            <PostItem key={post.id} post={post} onClick={navigateToBoardDetail} isSelected={post.id === postId} />
          ))}
        </div>
      </div>

      {showDetail && (
        <>
          <SliderBar listWidth={listWidth} setListWidth={setListWidth} containerRef={containerRef} />

          <div className={BoardStyle.detailSection} style={{ width: `${100 - listWidth}%` }}>
            <div className={BoardStyle.header}>
              <div className={BoardStyle.headerTitle}>
                {mockPosts.find((p) => p.id === postId)?.title ?? '게시글 없음'}
              </div>
              <button className={BoardStyle.threadCloseBtn} onClick={closeDetail} type='button'>
                ✕
              </button>
            </div>
            <PostDetail postId={postId} />
          </div>
        </>
      )}
    </div>
  );
}
