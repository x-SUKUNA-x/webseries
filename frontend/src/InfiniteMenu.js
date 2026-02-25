import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './InfiniteMenu.css';

const InfiniteMenu = ({ items, onSelect }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      if (scrollLeft + clientWidth >= scrollWidth) {
        container.scrollLeft = 0;
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="infinite-menu-container">
      <div className="infinite-menu-scroll" ref={containerRef}>
        <div className="infinite-menu-content">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="infinite-menu-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(item)}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteMenu;
