import React from 'react';

import './styles.sass';

export default ({ children }) => {
  return <div className="form-container">
    {children}
  </div>;
};