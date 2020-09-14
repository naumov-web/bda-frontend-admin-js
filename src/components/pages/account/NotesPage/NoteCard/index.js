import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';
// Components
import DeleteButton from '../../../../ui/DeleteButton';
import EditLink from '../../../../ui/EditLink';
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
      <div className="note-content">
        <div className="note-product-name">
          <b>{ productName }</b>
        </div>
        <div className="note-updated">
          { moment(updatedAt).format('YYYY-MM-DD HH:mm') }
        </div>
        <div className="note-text">
          { showText(text) }
        </div>
      </div>
      <div className="note-actions">
        <EditLink link="" />
        <DeleteButton onClick={() => {}} />
      </div>
    </Card.Body>
  </Card>;
};