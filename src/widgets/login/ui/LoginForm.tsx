import { PATH } from '@/shared/constants';
import { authForm, authFormWrapper } from '@/shared/styles';

import { authFormAtag, authFormButton, authFormPtag } from '@/shared/styles';

import FormInput from '@/shared/components/FormInput';
import Button from '@/shared/components/Button';
import { useForm } from 'react-hook-form';
import type { Login } from '../types';

export default function LoginForm() {
  const { register, handleSubmit } = useForm<Login>();

  const onSubmit = (data: Login) => {
    console.log(data);
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
