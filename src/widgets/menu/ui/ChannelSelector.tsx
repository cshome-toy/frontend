import { CHANNEL_LIST } from '@/shared/mock';
import {
  channelSelector,
  channelSelectorHeader,
  channelSelectorItem,
  channelSelectorItemActive,
  channelSelectorIcon,
  channelSelectorIconActive,
  channelSelectorList,
  channelSelectorWrapper,
} from '@/widgets/menu/styles';
import { useLocation, useNavigate } from '@tanstack/react-router';

export default function ChannelSelector() {
  const current = useLocation().pathname;
  const title = current.split('/')[1];
  const navigate = useNavigate();

  const channelList = CHANNEL_LIST[title];

  return (
    <div className={channelSelectorWrapper}>
      <div className={channelSelector}>
        {title && <div className={channelSelectorHeader}>{title}</div>}
        <div className={channelSelectorList}>
          {channelList &&
            channelList.map(({ id, title: channelTitle }) => {
              const isActive = current.includes(id);
              return (
                <button
                  className={`${channelSelectorItem} ${isActive ? channelSelectorItemActive : ''}`}
                  key={id}
                  onClick={() => navigate({ to: `${title}/${id}` })}
                >
                  <img
                    src='/icons/icon-chat.svg'
                    alt='channel'
                    className={`${channelSelectorIcon} ${isActive ? channelSelectorIconActive : ''}`}
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span>{channelTitle}</span>
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}
