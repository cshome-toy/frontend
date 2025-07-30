import { useMutation } from '@tanstack/react-query';
import type { Register } from '../types';
import { post, REQUEST } from '@/shared/api';

const submitRegister = async (data: Register) => {
  const response = await post<Register>({
    request: REQUEST.REGISTER,
    data: data,
  });
  return response.data;
};

export const useSubmitRegister = () => {
  return useMutation({
    mutationFn: submitRegister,
  });
};
