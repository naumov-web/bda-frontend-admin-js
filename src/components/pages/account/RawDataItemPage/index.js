import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactJson from 'react-json-view'
// Services
import { loadItem } from '../../../../services/rawData';

import './styles.sass';

export default () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    loadItem(id, { dispatch });
  }, []);

  const rawDataItem = useSelector(state => state.rawData.rawDataItem);

  if (!rawDataItem) {
    return null;
  }

  return <div className="mined-data-item-page wide-page page list-page center-content-page">
    <div>
      <h3>Просмотр собранных данных #{ rawDataItem.id }</h3>
      <p>
        <b>Дата и время создания записи: </b> { rawDataItem.date_time }
      </p>
      <p>
        <b>Наименование товара:</b> { rawDataItem.product.name }
      </p>
      <p>
        <b>Источник данных: </b> { rawDataItem.data_source.name }
      </p>
      <p>
        <b>Наименование задачи: </b> { rawDataItem.micro_task.name }
      </p>
      <div className="data-wrapper">
        <h4>Собранные данные</h4>
        <ReactJson 
          src={rawDataItem.data} 
          theme="monokai" 
          displayDataTypes={false} 
          style={
            {
              width: "100%"
            }
          }
        />
      </div>
      <div className="data-wrapper">
        <h4>Параметры задачи</h4>
        <ReactJson 
          src={rawDataItem.task_parameter_values} 
          theme="monokai" 
          displayDataTypes={false} 
          style={
            {
              width: "100%"
            }
          }
        />
      </div>
    </div>
    
  </div>;
};