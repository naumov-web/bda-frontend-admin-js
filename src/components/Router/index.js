import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

// Pages
import IndexPage from '../pages/public/IndexPage';
import LoginPage from '../pages/public/LoginPage';
import ProfilePage from '../pages/account/ProfilePage';
import LogoutPage from '../pages/account/LogoutPage';
import HandbookDataSourcesPage from '../pages/account/HandbookDataSourcesPage';
import HandbookProductsPage from '../pages/account/HandbookProductsPage';
import RawDataPage from '../pages/account/RawDataPage';
import RawDataItemPage from '../pages/account/RawDataItemPage';
import NotesPage from '../pages/account/NotesPage';
import FormNotePage from '../pages/account/FormNotePage';
// Components
import Menu from '../Menu';
import AccountGuard from '../hocs/AccountGuard';
// Services
import { load } from '../../services/handbooks';

import './styles.sass';

const Routes = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      const fetch = async () => load({ dispatch });

      fetch();
    }, 
    []
  );

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
              <AccountGuard>
                <Route path="/profile" exact component={ProfilePage} />
                <Route path="/logout" exact component={LogoutPage} />
                <Route path="/handbook/data-sources" exact component={HandbookDataSourcesPage} />
                <Route path="/handbook/products" exact component={HandbookProductsPage} />
                <Route path="/raw-data" exact component={RawDataPage} />
                <Route path="/raw-data/:id" exact component={RawDataItemPage} />
                <Route path="/notes" exact component={NotesPage} />
                <Route path="/notes/edit/:id" exact component={FormNotePage} />
                <Route path="/notes/add" exact component={FormNotePage} />
              </AccountGuard>
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