import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getProtectedMenuItems, getPublicMenuItems } from '../../config/menu';

export default () => {

  const isLogged = false;
  const filteredItems = isLogged ? getProtectedMenuItems() : getPublicMenuItems();

  return (
    <Nav className="justify-content-center">
      {filteredItems.map(menuItem => <Nav.Item key={menuItem.key}>
        <Link to={menuItem.link}>
          {menuItem.title}
        </Link>
      </Nav.Item>)}
    </Nav>
  );
}