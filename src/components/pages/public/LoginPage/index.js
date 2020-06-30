import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import FormContainer from '../../../hocs/FormContainer';

import { login } from '../../../../services/auth';

export default () => {

  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  const isLoading = useSelector(state => state.auth.isLoading);
  const errorMessage = useSelector(state => state.auth.serverError);
  const dispatch = useDispatch();
  const history = useHistory();

  const handle = (e) => {
    e.preventDefault();
    login(
      {email, password},
      { dispatch, history }
    );
  };

  return (
    <div className="login-page center-content-page">
      <div className="content-inner">
        <FormContainer>
          <>
            <h2>Авторизация</h2>
              <Form className="narrow-form" onSubmit={handle}>
                <>
                  {errorMessage && <Alert variant="danger">
                    {errorMessage}
                  </Alert>}
                  <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                      onChange={(e:any) => setEmail(e.target.value)} 
                      type="email" 
                      placeholder="Введите свой Email" 
                      disabled={isLoading}
                      required={true}
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control 
                      onChange={(e:any) => setPassword(e.target.value)} 
                      type="password" 
                      placeholder="Введите свой пароль" 
                      disabled={isLoading}
                      required={true}
                    />
                  </Form.Group>
                  <Form.Group controlId="submit">
                    <Button variant="success" type="submit" disabled={isLoading}>
                      Войти
                    </Button>
                  </Form.Group>
                </>
              </Form>
            
          </>
        </FormContainer>
      </div>
    </div>
  );
}