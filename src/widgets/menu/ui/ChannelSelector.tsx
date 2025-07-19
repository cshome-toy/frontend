import { channelSelector, channelSelectorHeader, channelSelectorWrapper } from '@/widgets/menu/styles';

export default function ChannelSelector() {
  return (
    <div className={channelSelectorWrapper}>
      <div className={channelSelector}>
        <div className={channelSelectorHeader}>cshome</div>
      </div>
    </div>
  );
}
