import React from 'react';
import './style.scss';
import user from '../../assets/imgs/user.jpg';
import Submit from '../../components/Submit';
import Search from '../../components/Search';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';

const Course = () => {
  return (
    <div>
      <div className="container">
        <h2 className="title">Nome do Curso</h2>
        {/* <fieldset>
          <nav id="menu">
            <ul>
              <li>
                <a className="link1" href="#">
                  Auditoria
                </a>
              </li>
              <li>
                <a href="#">Colação de Grau</a>
              </li>
            </ul>
          </nav>
        </fieldset>
        <fieldset>
          <div class="row">
            <div className="col-md-5">
              <Search />
            </div>
            <div className="col-md-7">
              <div className="right" /> <Dowloand />
            </div>
          </div>
          <table className="table table-hover borda-tabela-titulos">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">RA</th>
                <th scope="col">Polo</th>
                <th scope="col">
                  Semestre / <br /> Ano de Ingresso
                </th>
                <th scope="col">
                  Semestre / <br /> de Conclusão
                </th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img className="circle" src={user} /> Engenharia de Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>

                </td>
              </tr>
              <tr>
                <td>
                  <img className="circle" src={user} /> Engenharia de Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>

                </td>
              </tr>
              <tr>
                <td>
                  <img className="circle" src={user} /> Engenharia de Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>

                </td>
              </tr>
              <tr>
                <td>
                  <img className="circle" src={user} /> Engenharia de Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>

                </td>
              </tr>
              <tr>
                <td>
                  <img className="circle" src={user} /> Engenharia de Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>

                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
        <br /> */}

        <fieldset>
          <Menu />
        </fieldset>
        <fieldset>
          <div class="row">
            <div className="col-md-5">
              <Search />
            </div>
            {/* <div className="col-md-7">
              <div className="right" /> <Dowloand />
            </div> */}
          </div>
          <table className="table table-hover borda-tabela-titulos table2">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">RA</th>
                <th scope="col">Polo</th>
                <th scope="col">
                  Semestre / <br /> Ano de Ingresso
                </th>
                <th scope="col">
                  Semestre / <br /> de Conclusão
                </th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img className="circle" src={user} /> Engenharia de Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>
                  <Submit />
                  <button hidden id="button2">
                    Botão 2
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <img className="circle" src={user} /> Engenharia de Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>
                  <Submit />
                </td>
              </tr>
              <tr>
                <td>
                  <img className="circle" src={user} /> Engenharia de Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>
                  <Submit />
                </td>
              </tr>
              <tr>
                <td>
                  <img className="circle" src={user} /> Engenharia de Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>
                  <Submit />
                </td>
              </tr>
              <tr>
                <td>
                  <img className="circle" src={user} /> Engenharia de Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>
                  <Submit />
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
      <br />
    </div>
  );
};

export default Course;
