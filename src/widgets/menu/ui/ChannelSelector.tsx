import { CHANNEL_LIST, BOARD_LIST } from '@/shared/mock';
import {
  channelSelector,
  channelSelectorHeader,
  channelSelectorList,
  channelSelectorWrapper,
  categoryHeader,
  Image,
} from '@/widgets/menu/styles';
import { useLocation, useNavigate } from '@tanstack/react-router';

export default function ChannelSelector() {
  const current = useLocation().pathname;
  const serverId = current.split('/')[1];
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const categoryTypes = ['board', 'chat'] as const;
  const grouped: Record<CategoryType, ChannelCategory | undefined> = CHANNEL_LIST[serverId] ?? {};
  const [toggleState, setToggleState] = useState<Record<string, boolean>>({});

  const channelList = CHANNEL_LIST[title];
  const boardList = BOARD_LIST[title];

  return (
    <div className={channelSelectorWrapper}>
      <div className={channelSelector}>
        {title && <div className={channelSelectorHeader}>{title}</div>}
        <div className={channelSelectorList}>
          {boardList &&
            boardList.map(({ id, title: boardTitle }) => {
              const isActive = current.includes(id);
              return (
                <button
                  className={`${channelSelectorItem} ${isActive ? channelSelectorItemActive : ''}`}
                  key={id}
                  onClick={() => navigate({ to: `${title}/board/${boardTitle}` })}
                >
                  <img
                    src='/icons/icon-board.svg'
                    alt='channel'
                    className={`${channelSelectorIcon} ${isActive ? channelSelectorIconActive : ''}`}
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span>{boardTitle}</span>
                </button>
              );
            })}
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
