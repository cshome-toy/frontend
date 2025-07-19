import { sideBar, sideBarButton } from '@/widgets/menu/styles';

export default function SideBar() {
  return (
    <div className={sideBar}>
      <button className={sideBarButton}>
        <img src='/icons/icon-logo.svg' alt='logo' />
      </button>
    </div>
  );
}
