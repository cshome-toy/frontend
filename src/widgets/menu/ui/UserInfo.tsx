import { userInfo, userInfoImage } from '@/widgets/menu/styles';

export default function UserInfo() {
  return (
    <div className={userInfo}>
      <img className={userInfoImage} src='/images/image-profile.png' alt='user' />
    </div>
  );
}
