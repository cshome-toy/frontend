import { useState } from 'react';
import { CHANNEL_LIST } from '@/shared/mock/server';
import type { ChannelCategory } from '@/shared/types/channelCategory';
import type { CategoryType } from '@/shared/types/category';
import ChannelButton from '@/widgets/menu/ui/ChannelButton';
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

        {(categoryTypes).map((type) => {
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
                      <ChannelButton
                        key={id}
                        id={id}
                        title={title}
                        isActive={isActive}
                        onClick={() => navigate({ to: `/${serverId}/${type}/${id}` })}
                      />
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
