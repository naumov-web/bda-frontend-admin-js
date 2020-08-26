import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.sass';

export default () => {
  return <div className="raw-data-filters">
    <div className="raw-data-filters-item">
      <label>Собрано от:</label>
      <DatePicker />
    </div>
  </div>;
};