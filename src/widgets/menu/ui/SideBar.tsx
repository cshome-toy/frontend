import { PATH } from '@/shared/constants';
import { SERVER_LIST } from '@/shared/mock';
import { vars } from '@/vars.css';
import {
  sideBar,
  sideBarActiveIndicator,
  sideBarButton,
  sideBarButtonImage,
  sideBarButtonWrapper,
  sideBarSeparator,
} from '@/widgets/menu/styles';
import { useLocation, useNavigate } from '@tanstack/react-router';
import type { CSSProperties } from 'react';

export default function SideBar() {
  const current = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <div className={sideBar}>
      <div className={sideBarButtonWrapper}>
        <div
          className={sideBarActiveIndicator}
          style={
            {
              '--indicator-height': current === PATH.HOME ? '40px' : '0px',
            } as CSSProperties
          }
        />
        <button
          className={sideBarButton}
          style={{ backgroundColor: current === PATH.HOME ? vars.colors.point : vars.colors.mainLight }}
          onClick={() => navigate({ to: PATH.HOME })}
        >
          <img src='/icons/icon-logo.svg' alt='logo' />
        </button>
      </div>
      <div className={sideBarSeparator} />
      {SERVER_LIST.map(({ id, title, image }) => (
        <div className={sideBarButtonWrapper} key={id}>
          <div
            className={sideBarActiveIndicator}
            style={
              {
                '--indicator-height': current.includes(title) ? '40px' : '0px',
              } as CSSProperties
            }
          />
          <button className={sideBarButton} onClick={() => navigate({ to: `/${title}` })}>
            <img className={sideBarButtonImage} src={image} alt={title} />
          </button>
        </div>
      ))}
    </div>
  );
}
