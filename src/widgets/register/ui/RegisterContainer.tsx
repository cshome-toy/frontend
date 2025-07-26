import { authContainerTitle } from '@/shared/styles/authLayout.css';
import { registerContainer } from '../styles';
import RegisterForm from './RegisterForm';

export default function RegisterContainer() {
  return (
    <div className={registerContainer}>
      <p className={authContainerTitle}>계정 만들기</p>
      <RegisterForm />
    </div>
  );
}
