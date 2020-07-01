import React from 'react';
import { Link } from 'react-router-dom';

import { handbookMenuItems } from '../../config/menu';

import './styles.sass';

export default () => {
  return <div className="handbook-menu">
    {handbookMenuItems.map(item => <div>
      <Link to={item.link} key={item.link}>{item.title}</Link>
    </div>)}
  </div>;
}