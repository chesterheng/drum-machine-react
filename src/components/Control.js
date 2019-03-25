import React from 'react';
import Power from './Power';
import Display from './Display';
import Volume from './Volume';
import Bank from './Bank';
import './Control.css';

const Control = () => {
  return (
    <div className="p-4 controls-container">
      <h4 className="text-center">Control</h4>
      <Power />
      <Display />
      <Volume />
      <Bank />
    </div>
  );
}

export default Control;