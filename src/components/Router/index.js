import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

// Pages
import IndexPage from '../pages/public/IndexPage';
import LoginPage from '../pages/public/LoginPage';
import ProfilePage from '../pages/account/ProfilePage';
// Components
import Menu from '../Menu';

import './styles.sass';

const Routes = () => {
  return (
    <>
      <Switch>
        <Container fluid>
          <Row className="header">
            <Col lg="3">
              <div className="app-name">
                BDA - Административная панель
              </div>
            </Col>
            <Col lg="9">
              <Menu />
            </Col>
          </Row>
          <Row className="content">
            <Col>
              <Route path="/" exact component={IndexPage} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/profile" exact component={ProfilePage} />
            </Col>
          </Row>
          <Row className="footer">
            <Col>
              BDA - Административная панель
            </Col>
          </Row>
        </Container>
      </Switch>
      
    </>
  );
};

export default Routes;