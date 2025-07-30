import { getCookie } from './cookie';

export const fetchLoginStatus = () => {
  const accessToken = getCookie('accessToken');

  return !!accessToken;
};
