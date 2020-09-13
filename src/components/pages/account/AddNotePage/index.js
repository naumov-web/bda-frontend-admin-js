import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../../../hocs/FormContainer';
import Select from 'react-select';
// Services
import { load as loadProducts } from '../../../../services/products';
import { createProductNote } from '../../../../services/notes';
// Utils
import transformSelectOptions from '../../../../utils/transformers/reactSelectTransformer';
// Styles
import './styles.sass';

export default () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector(data => data.products.products);
  const note = useSelector(state => state.notes.note);

  const [text, setText] = useState(note.text);
  const [product_id, setProductId] = useState(note.product_id);

  useEffect(() => {
    if (products.length === 0) {
      loadProducts({}, { dispatch });
    }
  }, []);

  const handle = (e) => {
    e.preventDefault();
    createProductNote(
      {
        text,
        product_id
      },
      { history }
    );
  };

  return <div className="notes-page wide-page page list-page">
    <div className="content-inner">
        <FormContainer>
          <>
            <h2>Добавить заметку</h2>
            <Form onSubmit={handle}>
              <Form.Group controlId="product_id">
                <Form.Label>Товар:</Form.Label>
                <Select 
                  options={transformSelectOptions(products, product_id)} 
                  onChange={item => {
                    setProductId(item.value)
                  }}
                />
              </Form.Group>
              <Form.Group controlId="text">
                <Form.Label>Текст заметки:</Form.Label>
                <Form.Control 
                  as="textarea" 
                  required={true} 
                  rows="10"
                  onChange={(e:any) => setText(e.target.value)} 
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