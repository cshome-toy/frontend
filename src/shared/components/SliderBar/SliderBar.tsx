import { useEffect, useRef } from 'react';
import { SliderBarStyle } from './SliderBar.css';

const MIN_WIDTH = 20;
const MAX_WIDTH = 80;

interface SliderBarProps {
  listWidth: number;
  setListWidth: React.Dispatch<React.SetStateAction<number>>;
  containerRef?: React.RefObject<HTMLElement | null>;
}

const SliderBar = ({ listWidth, setListWidth, containerRef }: SliderBarProps) => {
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(0);

  useEffect(() => {
    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!draggingRef.current) return;
      const containerWidth = containerRef?.current?.offsetWidth || 1000;
      const deltaX = moveEvent.clientX - startXRef.current;
      const deltaPercent = (deltaX / containerWidth) * 100;
      const newWidth = Math.min(Math.max(startWidthRef.current + deltaPercent, MIN_WIDTH), MAX_WIDTH);
      setListWidth(newWidth);
    };

    const onMouseUp = () => {
      draggingRef.current = false;
      document.body.style.cursor = 'auto';
      document.body.style.userSelect = 'auto';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    if (draggingRef.current) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'auto';
      document.body.style.userSelect = 'auto';
    };
  }, [setListWidth, containerRef]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    draggingRef.current = true;
    startXRef.current = e.clientX;
    startWidthRef.current = listWidth;
  };

  return (
    <div
      className={SliderBarStyle}
      onMouseDown={handleMouseDown}
      role='separator'
      aria-orientation='vertical'
      aria-valuenow={listWidth}
      tabIndex={0}
    />
  );
};

export default SliderBar;
