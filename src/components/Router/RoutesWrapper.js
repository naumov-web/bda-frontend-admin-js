
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from "react-router-dom";

const RoutesWrapper = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>
};

RoutesWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default RoutesWrapper;