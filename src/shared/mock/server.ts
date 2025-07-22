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

export const CHANNEL_LIST: Record<string,Record<string, { id: string; title: string }[]> > = 
{
  cshome: {
    정보: [
      { id: 'welcome', title: '환영-인사와-규칙' },
      { id: 'notes',   title: '노트-자원' },
    ],
    '채팅 채널': [
      { id: '1', title: '일반' },
      { id: '2', title: '잡담' },
    ],
  },
}
