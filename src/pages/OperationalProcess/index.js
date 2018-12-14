import React from 'react';
import user from '../../assets/imgs/user.jpg';
import BtnEmail from '../../components/BtnEmail';
import Search from '../../components/Search';
// import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';

const Process = () => {
  return (
    <div>
      <div className="container">
        <h2 className="title">Nome do Curso</h2>

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
                <th scope="col">Motivo de Retenção</th>
                <th scope="col">Dias Restantes</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <p>Você ainda não possui nenhum processo atribuido.</p>
            </tbody>
          </table>
        </fieldset>
        <div className="row">
          <div className="col-md-12 ">
            <div className="float-right">
              <button className="next">SELECIONAR</button>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Process;
