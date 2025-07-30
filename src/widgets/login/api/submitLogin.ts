import { post } from '@/shared/api';
import { REQUEST } from '@/shared/api/request';
import { useMutation } from '@tanstack/react-query';
import type { Login } from '../types';
import type { Token } from '@/shared/types';

const submitLogin = async ({ email, password }: Login) => {
  const response = await post<Login, Token>({
    request: REQUEST.LOGIN,
    data: { email: email, password: password },
  });
  return response.data;
};

export const useSubmitLogin = () => {
  return useMutation({
    mutationFn: submitLogin,
  });
};
