import React from 'react';
import './inside.css';

const Inside = ({ isOpen }) => {
  return (
    <div className={`inside ${isOpen ? 'is-visible' : 'is-hidden'}`}>
      <div className="inside__content">
        <p className="inside__text">
          Mum,<br /><br />
          Through sun and storm, you've been my rock,<br />
          A beacon of love, unwavering and strong.<br />
          In moments of joy and times of trial,<br />
          Your support has been my guiding light.<br /><br />
          For all the sacrifices you've made,<br />
          And the endless love you've shown,<br />
          I am forever grateful, more than words can say.<br /><br />
          Thank you for being the heart of my world,<br />
          And the soul of our family.
        </p>
        <h1 className="inside__title">Happy Mother's Day, with all my love.</h1>
        <img className="inside__image" src="christopher.webp" alt="Chritopher" />
      </div>
    </div>
  );
};

export default Inside;
