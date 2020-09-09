import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import snakeCaseKeys from 'snakecase-keys';
import dateFormat from 'dateformat';
import httpBuildQuery from 'http-build-query';
import queryString from 'query-string';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
// Services
import { load } from '../../../../../services/products';
// Utils
import transformSelectOptions from '../../../../../utils/transformers/reactSelectTransformer';
// Styles
import 'react-datepicker/dist/react-datepicker.css';
import './styles.sass';

const getLink = (baseUrl, params) => {
  return baseUrl + '?' + httpBuildQuery(snakeCaseKeys(params));
};

export default ({ baseUrl }) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector(data => data.products.products);
  const defaultPagination = useSelector(data => data.rawData.defaultPagination);
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
  const [productId, setProductId] = useState(
    originQueryParams['product_id'] ? 
    originQueryParams['product_id'] :
    null
  );

  const onSubmit = () => {
    const queryParams = {
      ...defaultPagination,
      ...originQueryParams
    };

    if (dateTimeFrom) {
      queryParams['date_time_from'] = dateFormat(dateTimeFrom, 'yyyy-mm-dd HH:MM:ss');
    }

    if (dateTimeTo) {
      queryParams['date_time_to'] = dateFormat(dateTimeTo, 'yyyy-mm-dd HH:MM:ss');
    }

    if (productId) {
      queryParams['product_id'] = productId;
    }

    history.push(getLink(baseUrl, queryParams));

  };

  useEffect(() => {
    if (products.length === 0) {
      load({}, { dispatch });
    }
  }, []);

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
    <div className="raw-data-filters-row">
      <div className="raw-data-filters-item">
        <label>Товар:</label>
        <Select 
          options={transformSelectOptions(products, productId)} 
          onChange={item => {
            setProductId(item.value)
          }}
        />
      </div>
      <div className="raw-data-filters-item">
        <label>Источник информации:</label>
      </div>
      <div className="raw-data-filters-item">
        <label>Задача:</label>
      </div>
    </div>
    <div className="raw-data-buttons-row">
      <button className="btn btn-success btn-sm" onClick={onSubmit}>
        Применить
      </button>
    </div>
  </div>;
};