import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../../../hocs/FormContainer';
// Styles
import './styles.sass';

export default () => {
  const { id } = useParams();

  const [name, setName] = useState('');

  const handle = (e) => {
    e.preventDefault();
  }

  return <div className="notes-page wide-page page list-page">
    <div className="content-inner">
      <FormContainer>
        <>
          <h2>{ id ? `Редактировать схему отчета` : `Добавить схему отчета` }</h2>
          <Form onSubmit={handle}>
            <Form.Group controlId="email">
                <Form.Label>Наименование схемы отчета:</Form.Label>
                <Form.Control 
                  onChange={(e:any) => setName(e.target.value)} 
                  type="text" 
                  placeholder="Введите наименование схемы отчета" 
                  defaultValue={name}
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
};