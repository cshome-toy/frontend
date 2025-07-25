import { PATH } from '@/shared/constants';

import { loginForm, loginFormAtag, loginFormButton, loginFormPtag } from '../styles/LoginForm.css';

import FormInput from '@/shared/components/FormInput';
import Button from '@/shared/components/Button';

export default function LoginForm() {
  return (
    <>
      <div className={loginForm}>
        <FormInput title='이메일 또는 전화번호' />
        <FormInput title='비밀번호' type='password' />
      </div>
      <a href='' className={loginFormAtag}>
        비밀번호를 잊으셨나요?
      </a>
      <Button className={loginFormButton}>로그인</Button>
      <p className={loginFormPtag}>
        <span style={{ whiteSpace: 'nowrap' }}>계정이 필요한가요?</span>
        <a href={PATH.SIGNUP} className={loginFormAtag}>
          가입하기
        </a>
      </p>
    </>
  );
}
