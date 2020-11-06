import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select';
// Components
import FormContainer from '../../../hocs/FormContainer';
// Services
import { load as loadMicroTasks } from '../../../../services/microTasks';
// Utils
import 
  transformSelectOptions, 
  { getSelectedItem } 
  from '../../../../utils/transformers/reactSelectTransformer';
// Styles
import './styles.sass';

export default () => {

  const dispatch = useDispatch();
  const microTasks = useSelector(data => data.microTasks.microTasks);
  const { id } = useParams();

  const [name, setName] = useState(null);
  const [micro_task_id, setMicroTaskId] = useState(null);

  useEffect(() => {
    if (microTasks.length === 0) {
      loadMicroTasks({ dispatch });
    }

    if (id) {
      
    }
  }, []);

  const handle = (e) => {
    e.preventDefault();
  };

  return <div className="notes-page wide-page page list-page">
    <div className="content-inner">
      <FormContainer>
        <>
          <h2>{ id ? `Редактировать график схемы отчета` : `Добавить график схемы отчета`}</h2>
          <Form onSubmit={handle}>
            <Form.Group controlId="name">
                <Form.Label>Наименование схемы отчета:</Form.Label>
                <Form.Control 
                  onChange={(e:any) => setName(e.target.value)} 
                  type="text" 
                  placeholder="Введите наименование графика схемы отчета" 
                  defaultValue={name}
                  required
                />
            </Form.Group>
            <Form.Group controlId="micro_task_id">
              <Form.Label>Микрозадача:</Form.Label>
              <Select 
                  options={transformSelectOptions(microTasks, null || micro_task_id)} 
                  onChange={item => {
                    setMicroTaskId(item.value)
                  }}
                  defaultInputValue={null || micro_task_id}
                  value={getSelectedItem(microTasks, null || micro_task_id)}
                />
            </Form.Group>
            <Form.Group controlId="submit">
              <Button variant="success" type="submit">
                Сохранить
              </Button>
            </Form.Group>
          </Form>
        </>
      </FormContainer>
    </div>
  </div>;
}