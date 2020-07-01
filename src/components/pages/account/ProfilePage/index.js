import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Alert } from 'react-bootstrap';
import FormContainer from '../../../hocs/FormContainer';

import { load, update } from '../../../../services/profile';

export default () => {

  const isLoading = useSelector(state => state.profile.isLoading);
  const successMessage = useSelector(state => state.profile.successMessage);
  const user = useSelector(state => state.profile.user);

  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState(user.phone);

  const dispatch = useDispatch();
  
  useEffect(() => {
    load({
      dispatch
    });
  }, []);

  const handle = (e) => {
    e.preventDefault();
    update({
      email: email ? email : user.email,
      phone: phone ? phone : user.phone,
      password: password.length > 0 ? password : null
    }, { dispatch });
  };

  return (
    <div className="profile-page center-content-page page">
      <div className="content-inner">
        <FormContainer>
          <>
            <h2>Настройки пользователя</h2>
            <Form className="narrow-form" onSubmit={handle}>
              {successMessage && <Alert variant="success">
                {successMessage}
              </Alert>}
              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control 
                  onChange={(e:any) => setEmail(e.target.value)} 
                  type="email" 
                  placeholder="Введите свой Email" 
                  disabled={isLoading}
                  required={true}
                  defaultValue={user.email}
                />
              </Form.Group>    
              <Form.Group controlId="password">
                <Form.Label>Пароль:</Form.Label>
                <Form.Control 
                  onChange={(e:any) => setPassword(e.target.value)} 
                  type="password" 
                  placeholder="Введите свой пароль" 
                  disabled={isLoading}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Телефон:</Form.Label>
                <Form.Control 
                  onChange={(e:any) => setPhone(e.target.value)} 
                  type="text" 
                  placeholder="Введите свой номер телефона" 
                  disabled={isLoading}
                  defaultValue={user.phone}
                />
              </Form.Group>
              <Form.Group controlId="submit">
                <Button variant="success" type="submit" disabled={isLoading}>
                  Сохранить
                </Button>
              </Form.Group>
            </Form>
          </>
        </FormContainer>
      </div>
    </div>
  );
}