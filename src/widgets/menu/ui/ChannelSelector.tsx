import { useState } from 'react'
import { CHANNEL_LIST } from '@/shared/mock/server'
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
} from '@/widgets/menu/styles'
import { useLocation, useNavigate } from '@tanstack/react-router'

export default function ChannelSelector() {
  const current = useLocation().pathname
  const serverId = current.split('/')[1]
  const navigate = useNavigate()

  const grouped = CHANNEL_LIST[serverId] ?? {}

  const [toggleState, setToggleState] = useState<Record<string, boolean>>({})

  const toggleCategory = (category: string) => {
    setToggleState(prev => ({...prev,[category]: !prev[category],}))
  }

  const handleChannelClick = (channelId: string) => {
    navigate({ to: `/${serverId}/${channelId}` })
  }

  return (
    <div className={channelSelectorWrapper}>
      <div className={channelSelector}>
        {serverId && (
          <div className={channelSelectorHeader}>{serverId}</div>
        )}
        {Object.entries(grouped).map(([category, channels]) => {
          const activeChannelId = current.split('/').pop()!
          const hasActive = channels.some(ch => ch.id === activeChannelId)
          const isOpen = !!toggleState[category]

          const channelsToShow = isOpen ? channels: hasActive? channels.filter(ch => ch.id === activeChannelId) : []

          return (
            <div key={category}>
              
              <button
                className={categoryHeader}
                onClick={() => toggleCategory(category)}
              >
                <span>{category}</span>
                <span>{isOpen ? '▾' : '▸'}</span>
              </button>

              {channelsToShow.length > 0 && (
                <div className={channelSelectorList}>
                  {channelsToShow.map(({ id, title: channelTitle }) => {
                    const isActive = id === activeChannelId
                    return (
                      <button
                        key={id}
                        className={`${channelSelectorItem} ${isActive ? channelSelectorItemActive : ''}`}
                        onClick={() => handleChannelClick(id)}
                      >
                        <img
                          src="/icons/icon-chat.svg"
                          alt="channel"
                          className={`${channelSelectorIcon} ${isActive? channelSelectorIconActive : ''}`}
                          style={{ width: 20, height: 20 }}
                        />
                        <span>{channelTitle}</span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}