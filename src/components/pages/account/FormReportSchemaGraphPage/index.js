import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import ReactJson from 'react-json-view';
// Components
import FormContainer from '../../../hocs/FormContainer';
import Prompt from '../../../ui/Prompt';
// Services
import { load as loadMicroTasks } from '../../../../services/microTasks';
import { loadItemExample } from '../../../../services/rawData';
// Styles
import './styles.sass';

export default () => {

  const dispatch = useDispatch();
  const microTasks = useSelector(data => data.microTasks.microTasks);
  const rawDataItemExample = useSelector(data => data.rawData.rawDataItemExample);
  const { id } = useParams();

  const [name, setName] = useState(null);
  const [micro_task_id, setMicroTaskId] = useState(null);
  const [multiplex, setMultiplex] = useState(1);
  const [data_schema, setDataSchema] = useState(null);

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

  const onSelectMicroTaskId = (id) => {
    setMicroTaskId(id);
    loadItemExample(
      id,
      { dispatch }
    );
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
              <Form.Control 
                as="select"
                onChange={e => onSelectMicroTaskId(e.target.value)}
                defaultValue={null || micro_task_id}
              >
                {microTasks.map(
                  microTask => <option
                    key={`micro-task-option-${microTask.id}`}
                    value={microTask.id}
                  >
                    {microTask.name}
                  </option>
                )}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="multiplex">
              <Form.Label>Множитель:</Form.Label>
              <Form.Control 
                onChange={(e:any) => setMultiplex(e.target.value)} 
                type="number" 
                placeholder="Введите множитель графика" 
                defaultValue={multiplex}
                required
              />
              <Prompt 
                text={`Вещественное число, на которое будет умножена каждая координата
                      по оси ординат данного графика.`}
              />
            </Form.Group>
            <Form.Group controlId="data_schema">
              <Form.Label>Схема данных:</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Выберите схему данных для графика" 
                defaultValue={data_schema}
                required
                readOnly="readonly"
              />
              <Prompt 
                text={`Вам необходимо выбрать элемент структуры JSON, содержащий числовое значение, 
                      которое будет использоваться при построении графика.`}
              />
              {rawDataItemExample && (
                <ReactJson 
                  src={rawDataItemExample.data} 
                  theme="monokai" 
                  displayDataTypes={false} 
                  style={
                    {
                      width: "100%"
                    }
                  }
                />
              )}
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