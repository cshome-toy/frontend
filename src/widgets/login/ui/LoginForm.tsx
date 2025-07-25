import Input from '@/shared/components/Input';
import {
  loginForm,
  loginFormAtag,
  loginFormItem,
  loginFormItemTitle,
  loginFormItemTitleRequired,
  loginFormButton,
  loginFormPtag,
} from '../styles/LoginForm.css';
import type { InputHTMLAttributes } from 'react';
import Button from '@/shared/components/Button';

interface LoginFormItemProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  title: string;
}

export default function LoginForm() {
  return (
    <>
      <div className={loginForm}>
        <LoginFormItem title='이메일 또는 전화번호' />
        <LoginFormItem title='비밀번호' type='password' />
      </div>
      <a href='' className={loginFormAtag}>
        비밀번호를 잊으셨나요?
      </a>
      <Button className={loginFormButton}>로그인</Button>
      <p className={loginFormPtag}>
        <span style={{ whiteSpace: 'nowrap' }}>계정이 필요한가요?</span>
        <a className={loginFormAtag}>가입하기</a>
      </p>
    </>
  );
}

const LoginFormItem = ({ title, ...rest }: LoginFormItemProps) => {
  return (
    <div className={loginFormItem}>
      <p className={loginFormItemTitle}>
        <span>{title}</span>
        <span className={loginFormItemTitleRequired}>*</span>
      </p>
      <Input variant='auth' {...rest} />
    </div>
  );
};
