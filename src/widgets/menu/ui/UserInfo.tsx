import { USER } from '@/shared/mock';
import {
  userInfo,
  userInfoImage,
  userInfoContent,
  userInfoContentName,
  userInfoContentEmail,
} from '@/widgets/menu/styles';

export default function UserInfo() {
  const { name, email, image } = USER;

  return (
    <div className={userInfo}>
      <img className={userInfoImage} src={image} alt='user' />
      <div className={userInfoContent}>
        <p className={userInfoContentName}>{name}</p>
        <p className={userInfoContentEmail}>{email}</p>
      </div>
    </div>
  );
}
