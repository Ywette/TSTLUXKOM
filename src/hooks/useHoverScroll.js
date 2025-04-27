import { useEffect, useRef, useState } from 'react';

export const useHoverScroll = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const checkScrollability = () => {
      if (contentRef.current) {
        const { scrollHeight, clientHeight } = contentRef.current;
        setCanScroll(scrollHeight > clientHeight);
      }
    };

    checkScrollability();
    window.addEventListener('resize', checkScrollability);

    return () => {
      window.removeEventListener('resize', checkScrollability);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return {
    isHovered,
    canScroll,
    contentRef,
    handleMouseEnter,
    handleMouseLeave
  };
};

export default useHoverScroll; 