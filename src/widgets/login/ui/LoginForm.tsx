import { PATH } from '@/shared/constants';
import { authForm, authFormWrapper } from '@/shared/styles';

import { authFormAtag, authFormButton, authFormPtag } from '@/shared/styles';

import FormInput from '@/shared/components/FormInput';
import Button from '@/shared/components/Button';
import { useForm } from 'react-hook-form';
import type { Login } from '../types';
import { useSubmitLogin } from '../api';
import { useNavigate } from '@tanstack/react-router';
import { setCookie } from '@/shared/utils';

export default function LoginForm() {
  const { register, handleSubmit } = useForm<Login>();
  const { mutate: login } = useSubmitLogin();
  const navigate = useNavigate();

  const onSubmit = (data: Login) => {
    login(data, {
      onSuccess: (data) => {
        setCookie('accessToken', data.accessToken, 7);
        setCookie('refreshToken', data.refreshToken, 7);
        navigate({ to: PATH.HOME });
      },
      onError: () => {
        alert('로그인에 실패했어요!');
      },
    });
  };

  return (
    <form className={authFormWrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={authForm}>
        <FormInput title='이메일 또는 전화번호' {...register('email', { required: true })} />
        <FormInput title='비밀번호' type='password' {...register('password', { required: true })} />
      </div>
      <a href='' className={authFormAtag}>
        비밀번호를 잊으셨나요?
      </a>
      <Button className={authFormButton} type='submit'>
        로그인
      </Button>
      <p className={authFormPtag}>
        <span>계정이 필요한가요? </span>
        <a href={PATH.REGISTER} className={authFormAtag}>
          가입하기
        </a>
      </p>
    </form>
  );
}
