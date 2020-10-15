import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import FormContainer from '../../../hocs/FormContainer';
// Styles
import './styles.sass';

export default () => {
  const defaultTypeId = 1;
  const { id } = useParams();

  const [name, setName] = useState('');
  const [datetimeFrom, setDatetimeFrom] = useState(null);
  const [datetimeTo, setDatetimeTo] = useState(null);

  const handle = (e) => {
    e.preventDefault();

    if (id) {

    } else {

    }
  }

  return <div className="notes-page wide-page page list-page">
    <div className="content-inner">
      <FormContainer>
        <>
          <h2>{ id ? `Редактировать схему отчета` : `Добавить схему отчета` }</h2>
          <Form onSubmit={handle}>
            <Form.Group controlId="name">
                <Form.Label>Наименование схемы отчета:</Form.Label>
                <Form.Control 
                  onChange={(e:any) => setName(e.target.value)} 
                  type="text" 
                  placeholder="Введите наименование схемы отчета" 
                  defaultValue={name}
                  required
                />
            </Form.Group>
            <div className="datetime-row">
              <Form.Group controlId="datetime_from">
                <Form.Label>Дата начала построения отчета:</Form.Label>
                <div>
                  <DatePicker 
                    selected={datetimeFrom}
                    onChange={date => setDatetimeFrom(date)}
                    showTimeSelect
                    timeFormat="p"
                    timeIntervals={15}
                    dateFormat="yyyy-MM-dd p"
                    className="form-control"
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="datetime_to">
                <Form.Label>Дата завершения построения отчета:</Form.Label>
                <div>
                  <DatePicker 
                    selected={datetimeTo}
                    onChange={date => setDatetimeTo(date)}
                    showTimeSelect
                    timeFormat="p"
                    timeIntervals={15}
                    dateFormat="yyyy-MM-dd p"
                    className="form-control"
                  />
                </div>
              </Form.Group>
            </div>
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
};