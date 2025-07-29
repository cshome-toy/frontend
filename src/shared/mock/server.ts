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

export const CHANNEL_LIST: Record<string, { id: string; title: string }[]> = {
  cshome: [
    {
      id: '3',
      title: '일반',
    },
    {
      id: '4',
      title: '잡담',
    },
  },
};

export const BOARD_LIST: Record<string, { id: string; title: string }[]> = {
  cshome: [
    {
      id: '1',
      title: '질문게시판',
    },
    {
      id: '2',
      title: '공유게시판',
    },
  ],
};
