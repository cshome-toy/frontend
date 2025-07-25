import { PATH } from '@/shared/constants';
import { authForm } from '@/shared/styles';

import { authFormAtag, authFormButton, authFormPtag } from '@/shared/styles';

import FormInput from '@/shared/components/FormInput';
import Button from '@/shared/components/Button';

export default function LoginForm() {
  return (
    <>
      <div className={authForm}>
        <FormInput title='이메일 또는 전화번호' />
        <FormInput title='비밀번호' type='password' />
      </div>
      <a href='' className={authFormAtag}>
        비밀번호를 잊으셨나요?
      </a>
      <Button className={authFormButton}>로그인</Button>
      <p className={authFormPtag}>
        <span style={{ whiteSpace: 'nowrap' }}>계정이 필요한가요?</span>
        <a href={PATH.REGISTER} className={authFormAtag}>
          가입하기
        </a>
      </p>
    </>
  );
}
