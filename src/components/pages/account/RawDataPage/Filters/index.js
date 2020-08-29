import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import snakeCase from 'snake-case';
import dateFormat from 'dateformat';
import httpBuildQuery from 'http-build-query';
import queryString from 'query-string';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.sass';

const getLink = (baseUrl, params) => {
  return baseUrl + '?' + httpBuildQuery(params);
};

export default ({ baseUrl }) => {

  const history = useHistory();
  const originQueryParams = queryString.parse(history.location.search);
  const [dateTimeFrom, setDateTimeFrom] = useState(
    originQueryParams['date_time_from'] ? 
    new Date(Date.parse(originQueryParams['date_time_from'])) :
    null
  );
  const [dateTimeTo, setDateTimeTo] = useState(
    originQueryParams['date_time_to'] ? 
    new Date(Date.parse(originQueryParams['date_time_to'])) :
    null
  );
  const defaultPagination = useSelector(state => state.rawData.defaultPagination);

  const onSubmit = () => {
    const queryParams = {
      limit: defaultPagination.limit,
      offset: defaultPagination.offset
    };

    if (dateTimeFrom) {
      queryParams['date_time_from'] = dateFormat(dateTimeFrom, 'yyyy-mm-dd hh:MM:ss');
    }

    if (dateTimeTo) {
      queryParams['date_time_to'] = dateFormat(dateTimeTo, 'yyyy-mm-dd hh:MM:ss');
    }

    history.push(getLink(baseUrl, queryParams));

  };

  return <div className="raw-data-filters">
    <div className="raw-data-filters-row">
      <div className="raw-data-filters-item">
        <label>Собрано от:</label>
        <DatePicker 
          selected={dateTimeFrom}
          onChange={date => setDateTimeFrom(date)}
          showTimeSelect
          timeFormat="p"
          timeIntervals={15}
          dateFormat="yyyy-MM-dd p"
        />
      </div>
      <div className="raw-data-filters-item">
        <label>Собрано до:</label>
        <DatePicker 
          selected={dateTimeTo}
          onChange={date => setDateTimeTo(date)}
          showTimeSelect
          timeFormat="p"
          timeIntervals={15}
          dateFormat="yyyy-MM-dd p"
        />
      </div>
    </div>
    <div className="raw-data-buttons-row">
      <button className="btn btn-success btn-sm" onClick={onSubmit}>
        Применить
      </button>
    </div>
  </div>;
};