import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Jumbotron from '../Jumbotron';
import Audit from '../../pages/Audit';
import Legislation from '../../pages/Legislation';
import Course from '../../pages/Course';
import Retained from '../../pages/Retained';
import Email from '../../pages/Email';
import Process from '../../pages/Process';
import OperationalProcess from '../../pages/OperationalProcess';

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
          <Route path="/mail" component={Email} />
          <Route path="/process" component={Process} />
          <Route path="/operationalprocess" component={OperationalProcess} />
        </Switch>
      </BrowserRouter>
    </Main>
  </Fragment>
);

export default Content;
