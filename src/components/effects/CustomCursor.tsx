'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 0.1s lag can be approximated with spring settings, but we can also use useSpring
  const ringX = useSpring(mouseX, { stiffness: 100, damping: 15, mass: 0.1 });
  const ringY = useSpring(mouseY, { stiffness: 100, damping: 15, mass: 0.1 });
  
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 40 });

  useEffect(() => {
    // Hide default cursor globally
    document.body.style.cursor = 'none';

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', moveMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const onMouseEnterLink = () => setHovered(true);
    const onMouseLeaveLink = () => setHovered(false);

    const addHoverListeners = () => {
      const interactables = document.querySelectorAll('a, button, [role="button"], input, textarea, .hover-trigger');
      interactables.forEach((el) => {
        // Also ensure these elements hide their default cursor
        (el as HTMLElement).style.cursor = 'none';
        el.addEventListener('mouseenter', onMouseEnterLink);
        el.addEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', moveMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  if (hidden) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999] hidden lg:block"
        style={{
          width: 6,
          height: 6,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: '#F2EFE8',
        }}
        animate={{
          opacity: hovered ? 0 : 1, // dot vanishes on hover
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99998] hidden lg:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          border: '1px solid #00FFFF',
        }}
        animate={{
          width: hovered ? 20 : 28,
          height: hovered ? 20 : 28,
          backgroundColor: hovered ? '#00FFFF' : 'transparent',
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
