import FormInput from '@/shared/components/FormInput';
import Button from '@/shared/components/Button';

import { PATH } from '@/shared/constants';
import { authForm, authFormAtag, authFormButton, authFormPtag, authFormWrapper } from '@/shared/styles';

export default function RegisterForm() {
  return (
    <form className={authFormWrapper}>
      <div className={authForm}>
        <FormInput title='이메일' type='email' />
        <FormInput
          title='별명'
          required={false}
          description='다른 회원에게 표시되는 이름이에요. 특수 문자와 이모지를 사용할 수 있어요.'
        />
        <FormInput title='사용자명' type='text' description='숫자, 문자, 밑줄 _, 마침표만 사용할 수 있습니다.' />
        <FormInput title='비밀번호' type='password' />
        <FormInput title='생년월일' />
        <p className={authFormPtag}>
          <span>"계정 만들기"를 클릭하면 Discord의</span> <a className={authFormAtag}>이용 약관</a>에 동의하며{' '}
          <a className={authFormAtag}>개인정보 보호 정책</a>을 읽었음을 확인하는 것으로 간주됩니다.
        </p>
      </div>
      <Button className={authFormButton}>계정 만들기</Button>
      <a href={PATH.LOGIN} className={authFormAtag}>
        이미 계정이 있나요? 로그인하세요
      </a>
    </form>
  );
}
