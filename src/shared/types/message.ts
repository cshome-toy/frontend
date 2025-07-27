export type Message = {
  content: string;
  timestamp: string;
  user: {
    name: string;
    image: string;
  };
};