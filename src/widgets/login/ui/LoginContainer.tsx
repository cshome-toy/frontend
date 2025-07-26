import {
  loginContainer,
  loginContainerLarge,
  loginContainerLargeItem,
  loginContainerQr,
  loginContainerSubtitle,
} from '../styles';
import { authContainerTitle, authFormAtag } from '@/shared/styles/authLayout.css';

import LoginForm from './LoginForm';

export default function LoginContainer() {
  return (
    <div className={loginContainerLarge}>
      <div className={loginContainer}>
        <p className={authContainerTitle}>돌아오신 것을 환영해요!</p>
        <p className={loginContainerSubtitle}>다시 만나다니 너무 반가워요!</p>
        <LoginForm />
      </div>
      <div className={loginContainerLargeItem}>
        <img src='images/image-qr.png' alt='qr' className={loginContainerQr} />
        <p className={authContainerTitle}>QR 코드로 로그인</p>
        <p className={loginContainerSubtitle} style={{ textAlign: 'center' }}>
          <b>Discord 모바일 앱</b>으로 스캔해 바로 로그인하세요.
        </p>
        <a href='' className={authFormAtag} style={{ textAlign: 'center' }}>
          또는, 패스키로 로그인하세요
        </a>
      </div>
    </div>
  );
}
