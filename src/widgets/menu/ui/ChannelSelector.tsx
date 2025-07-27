import { useState } from 'react';
import { CHANNEL_LIST } from '@/shared/mock/server';
import type { ChannelCategory } from '@/shared/mock/server';
import {
  channelSelector,
  channelSelectorHeader,
  channelSelectorItem,
  channelSelectorItemActive,
  channelSelectorIcon,
  channelSelectorIconActive,
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

  const grouped: Record<'chat' | 'board', ChannelCategory | undefined> = CHANNEL_LIST[serverId] ?? {};
  const [toggleState, setToggleState] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setToggleState((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className={channelSelectorWrapper}>
      <div className={channelSelector}>
        {serverId && <div className={channelSelectorHeader}>{serverId}</div>}

        const categoryType = ['board', 'chat'] as const;
        ...
        {categoryType.map((type) => {
          const category = grouped[type];
          if (!category) return null;

          const activeChannelId = current.split('/').pop()!;
          const hasActive = category.items.some((ch) => ch.id === activeChannelId);
          const isOpen = !!toggleState[type];

          const channelsToShow = isOpen ? category.items : hasActive ? category.items.filter((ch) => ch.id === activeChannelId): [];

          return (
            <div key={type}>
              <button className={categoryHeader} onClick={() => toggleCategory(type)}>
                <span>{category.label}</span>
                <span onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                  <img className={Image}src={isOpen ? hovered ? '/icons/icon-arrow(Down_sub).svg' : '/icons/icon-arrow(down_subDark).svg'
                                                    : hovered? '/icons/icon-arrow(Right_sub).svg': '/icons/icon-arrow(Right_subDark).svg'} 
                                                    alt="arrow"/>
                </span>

              </button>

              {channelsToShow.length > 0 && (
                <div className={channelSelectorList}>
                  {channelsToShow.map(({ id, title }) => {
                    const isActive = id === activeChannelId;
                    return (
                      <button
                        key={id}
                        className={`${channelSelectorItem} ${isActive ? channelSelectorItemActive : ''}`}
                        onClick={() => navigate({ to: `/${serverId}/${type}/${id}` })}
                      >
                        <img
                          src="/icons/icon-chat.svg"
                          alt="channel"
                          className={`${channelSelectorIcon} ${isActive ? channelSelectorIconActive : ''}`}
                          style={{ width: 20, height: 20 }}
                        />
                        <span>{title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
