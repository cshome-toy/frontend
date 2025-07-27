import type { ChannelCategory } from '@/shared/types/channelCategory';
import type { CategoryType } from '@/shared/types/category';
export const SERVER = {
  title: 'cshome',
  image: '/images/image-server.png',
};

export const SERVER_LIST = [
  {
    id: 'cshome',
    title: 'cshome',
    image: '/images/image-server.png',
  },
];

export const CHANNEL_LIST: Record<string, Record<CategoryType, ChannelCategory>> = {
  cshome: {
    chat: {
      label: '채팅 채널(채팅방)',
      items: [
        { id: '1', title: '일반' },
        { id: '2', title: '잡담' },
      ],
    },
    board: {
      label: '정보(게시판)',
      items: [
        { id: 'welcome', title: '환영합니다' },
        { id: 'notes', title: '노트-자료' },
      ],
    },
  },
};
