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
import CourseDate from '../../pages/CourseDate';
import Report from '../../pages/Report';
import Documents from '../../pages/Documents';
import PersonalData from '../../pages/PersonalData';

import Main from './styles';
import Avaliations from '../../assets/imgs/avaliacoes.svg';

const links = [
  {
    name: 'Auditoria',
    active: true,
    url: '/'
  },
  {
    name: 'Colação de Grau',
    active: false,
    url: '/colocao'
  },
  {
    name: 'Diplomas',
    active: false,
    url: '/diplomas'
  },
  {
    name: 'Estágios',
    active: false,
    url: '/estagio'
  },
  {
    name: 'Ingresso',
    active: false,
    url: '/admission'
  },
  {
    name: 'Vida Acadêmica',
    active: false,
    url: '/academic'
  },
  {
    name: 'Prontuário',
    active: false,
    url: '/report'
  }
];

const Content = () => (
  <Fragment>
    <Jumbotron title="Apoio ao aluno" icon={Avaliations} links={links} />
    <Main>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={({ match: { url } }) => (
              <Fragment>
                <Route exact path={`${url}`} component={Audit} />
                <Route path={`/legislation`} component={Legislation} />
                <Route path={`/course`} component={Course} />

                <Route path={`/retained`} component={Retained} />
                <Route path={`/mail`} component={Email} />
                <Route path={`/process`} component={Process} />
                <Route
                  path={`/operationalprocess`}
                  component={OperationalProcess}
                />
                <Route path={`/coursedate`} component={CourseDate} />
                <Route path={`/report`} component={Report} />
                <Route path={`/documents`} component={Documents} />
                <Route path={`/personaldata`} component={PersonalData} />
              </Fragment>
            )}
          />
        </Switch>
      </BrowserRouter>
    </Main>
  </Fragment>
);
export default Content;
