import React, { useState } from 'react';
import './card.css';
import { motion } from 'framer-motion';
import Inside from './inside';

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="scene" onClick={toggleOpen}>
      <motion.div
        className={`card ${isOpen ? 'is-open' : ''}`}
        animate={{ rotateY: isOpen ? -180 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="card__face card__face--front">
          <img src="mum-card-cover.webp" alt="Mother's Day" />
        </div>
        <div className="card__face card__face--back">
          <p>More lovely words here!</p>
        </div>
      </motion.div>
      <Inside isOpen={isOpen} />
    </div>
  );
};

export default Card;
