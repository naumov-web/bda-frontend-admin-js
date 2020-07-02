import React from 'react';
import { useSelector } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getProtectedMenuItems, getPublicMenuItems } from '../../config/menu';

import './styles.sass';

export default () => {

  const isLogged = useSelector(state => state.auth.isLogged);
  const filteredItems = isLogged ? getProtectedMenuItems() : getPublicMenuItems();

  return (
    <Nav className="justify-content-center menu">
      {filteredItems.map(menuItem => <Nav.Item key={menuItem.link}>
        <Link to={menuItem.link}>
          {menuItem.title}
        </Link>
      </Nav.Item>)}
    </Nav>
  );
}