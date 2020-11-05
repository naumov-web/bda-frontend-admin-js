import React from 'react';
import { Form, Button } from 'react-bootstrap';
// Components
import FormContainer from '../../../hocs/FormContainer';
// Styles
import './styles.sass';

export default () => {

  const handle = (e) => {
    e.preventDefault();
  };

  return <div className="notes-page wide-page page list-page">
    <div className="content-inner">
      <FormContainer>
        <>
          <h2>Добавить график схемы отчета</h2>
          <Form onSubmit={handle}>
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