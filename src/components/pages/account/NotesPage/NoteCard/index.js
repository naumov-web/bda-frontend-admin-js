import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';
// Styles
import './styles.sass';

export default ({ id, productName, updatedAt, text }) => {

  const shortTextLimit = 500;
  let [expandedText, setExpandedText] = useState(false);

  const showText = (text) => {
    if (expandedText || text.length <= shortTextLimit) {
      return text;
    }

    return <>
      { text.substring(0, shortTextLimit) + '...' }
      <span onClick={() => setExpandedText(true)} className="expand"> Подробнее </span>
    </>;
  };

  return <Card className="note">
    <Card.Body>
      <div className="note-product-name">
        <b>{ productName }</b>
      </div>
      <div className="note-updated">
        { moment(updatedAt).format('YYYY-MM-DD HH:mm') }
      </div>
      <div className="note-text">
        { showText(text) }
      </div>
    </Card.Body>
  </Card>;
};