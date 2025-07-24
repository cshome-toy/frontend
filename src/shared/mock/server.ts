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

export type ChannelCategory = {
  label: string;
  items: { id: string; title: string }[];
};

export const CHANNEL_LIST: Record<
  string,
  {
    chat: ChannelCategory;
    board: ChannelCategory;
  }
> = {
  cshome: {
    chat: {
      label: '💬 채팅 채널',
      items: [
        { id: '1', title: '일반' },
        { id: '2', title: '잡담' },
      ],
    },
    board: {
      label: '📌 정보',
      items: [
        { id: 'welcome', title: '환영합니다' },
        { id: 'notes', title: '노트-자료' },
      ],
    },
  },
};
