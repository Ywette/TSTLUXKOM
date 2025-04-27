// hooks/useHoverScroll.js
'use client';

import { useEffect, useRef, useState } from 'react';

export function useHoverScroll(containerRef, scrollContentRef) {
  const frameRef = useRef();
  const targetY = useRef(0);
  const currentY = useRef(0);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const content = scrollContentRef.current;

    if (!container || !content) return;

    const updateScrollability = () => {
      const containerHeight = container.offsetHeight;
      const contentHeight = content.scrollHeight;
      setIsScrollable(contentHeight > containerHeight);
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const relY = e.clientY - rect.top;
      const height = rect.height;

      const scrollHeight = content.scrollHeight - height;
      const scrollTarget = (relY / height) * scrollHeight;

      targetY.current = -scrollTarget;
    };

    const animate = () => {
      const delta = targetY.current - currentY.current;
      currentY.current += delta * 0.15; // smoother spring factor
      scrollContentRef.current.style.transform = `translateY(${currentY.current}px)`;
      frameRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', handleMouseMove);
    updateScrollability();
    frameRef.current = requestAnimationFrame(animate);

    const resizeObserver = new ResizeObserver(updateScrollability);
    resizeObserver.observe(content);

    return () => {
      cancelAnimationFrame(frameRef.current);
      container.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
    };
  }, [containerRef, scrollContentRef]);

  return { isScrollable };
}
