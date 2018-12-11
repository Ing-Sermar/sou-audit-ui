import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Jumbotron from '../Jumbotron';
import Audit from '../../pages/Audit';
import Legislation from '../../pages/Legislation';
import Course from '../../pages/Course';
import Retained from '../../pages/Retained';

import Main from './styles';
import Avaliations from '../../assets/imgs/avaliacoes.svg';

const Content = () => (
  <Fragment>
    <Jumbotron title="APOIO AO ALUNO" icon={Avaliations} />
    <Main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Audit} />
          <Route path="/legislation" component={Legislation} />
          <Route path="/course" component={Course} />
          <Route path="/retained" component={Retained} />
        </Switch>
      </BrowserRouter>
    </Main>
  </Fragment>
);

export default Content;
