import React from 'react';
import Back from '../../components/Back';
import './style.scss';

const CurseDate = () => {
  return (
    <div>
      <div className="container">
        <hr />
        <h5 className="titulo-1">Dados Pessoais</h5>

        <div className="col-md-6 formColunas">
          <p className="fontTitulo">
            Nome Civil <span className="fontConteudo">Pedro Souza</span>
          </p>
          <p className="fontTitulo">
            Nome Social{' '}
            <span className="fontConteudo">Não existe nome social</span>
          </p>
          <p className="fontTitulo">
            Nome do Curso <span className="fontConteudo"> 444.356.989-12</span>
          </p>
          <p className="fontTitulo">
            Nível <span className="fontConteudo">XXX</span>
          </p>
          <p className="fontTitulo">
            RA <span className="fontConteudo">XXX</span>
          </p>
          <p className="fontTitulo">
            Polo <span className="fontConteudo">XXX</span>
          </p>
          <p className="fontTitulo">
            Ano do Ingresso.Semestre <span className="fontConteudo">XXX</span>
          </p>
        </div>
        <div className="box col-md-1" />
        <div className="box linhaVertical col-md-1" />
        <div className="col-md-5 formColunas">
          <p className="fontTitulo">
            Ano de Ingresso.Mês <span className="fontConteudo">XXX</span>
          </p>
          <p className="fontTitulo">
            Ano de Conclusão.Semestre <span className="fontConteudo">XXX</span>
          </p>
          <p className="fontTitulo">
            Ano de Conclusão.Mês <span className="fontConteudo">XXX</span>
          </p>
          <p className="fontTitulo">
            Documento de Identidade <span className="fontConteudo">XXX</span>
          </p>
          <p className="fontTitulo">
            Nacionalidade <span className="fontConteudo">XXX</span>
          </p>
          <p className="fontTitulo">
            Naturalidade <span className="fontConteudo">XXX</span>
          </p>
          <p className="fontTitulo">
            Status <span className="fontConteudo">XXX</span>
          </p>
        </div>

        <h5 className="titulo-2">Dados do Curso</h5>
        <p className="bordasColunas-2 col-md-6 formBordas">
          Nome do Curso
          <p className="conteudoBorda" />
          <span className="fontBordas">XXX</span>
        </p>
        <p className="bordasColunas-2 col-md-6 formBordas">
          Tipo de Curso
          <p className="conteudoBorda" />
          <span className="fontBordas">XXX</span>
        </p>

        <p className="bordasColunas-3 col-md-4 formBordas">
          Carga horária total do curso
          <p className="conteudoBorda" />
          <span className="fontBordas">XXX</span>
        </p>
        <p className="bordasColunas-3 col-md-4 formBordas">
          Carga horária cumprida no curso
          <p className="conteudoBorda" />
          <span className="fontBordas">XXX</span>
        </p>
        <p className="bordasColunas-3 col-md-4 formBordas">
          Progressão no Curso
          <p className="conteudoBorda" />
          <span className="fontBordas">XXX</span>
        </p>

        <p className="bordasColunas-4 bordasCampo col-md-1 formBordas">
          Média Global
          <p className="conteudoBorda" />
          <span className="fontBordas">XXX</span>
        </p>
        <p className="bordasColunas-5 col-md-5 formBordas">
          Aproveitamento de Aprendizagem
          <p className="conteudoBorda" />
          <span className="fontBordas">XXX</span>
        </p>
        <p className="bordasColunas-5 col-md-5 formBordas">
          Percentual Glogal de Frequência
          <p className="conteudoBorda" />
          <span className="fontBordas">XXX</span>
        </p>
        <p className="bordasColunas-4 col-md-1 formBordas">
          Situação
          <p className="conteudoBorda" />
          <span className="fontBordas">XXX</span>
        </p>
        <h5 className="titulo-2">Matriz Curricular</h5>
        <span className="fontConteudo">
          Matriz cadastrada em 10/09/2017 por Maria da Silva Costa.
        </span>
        <div className="col-md-6 formColunas">
          <h5 className="titulo-2">1º BIMESTRE</h5>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
        </div>

        <div className="col-md-6 formColunas">
          <h5 className="titulo-2">2º BIMESTRE</h5>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
        </div>

        <div className="col-md-6 formColunas">
          <h5 className="titulo-2">3º BIMESTRE</h5>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
        </div>

        <div className="col-md-6 formColunas">
          <h5 className="titulo-2">4º BIMESTRE</h5>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
          <p className="fontTitulo">
            Disciplina{' '}
            <span className="fontBimestre">
              12h
              <span className="fontBimestre-2">
                10,0<span className="fontBimestre-3">75%</span>
              </span>
            </span>
          </p>
        </div>
        <p className="linhaForm" />
        <hr />
        <span className="titulo-3">
          O curso tem disciplina obrigatória de estágio?
        </span>
        <div className="form-check checarForm">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label className="form-check-label" forHTML="Yes">
            Sim
          </label>
        </div>
        <div className="form-check checarForm-1">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label className="form-check-label" forHTML="No">
            Não
          </label>
        </div>
        <span className="titulo-3">
          O aluno entregou o Termo de Compromisso?
        </span>
        <div className="form-check checarForm">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label className="form-check-label" forHTML="Yes">
            Sim
          </label>
        </div>
        <div className="form-check checarForm-1">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label className="form-check-label" forHTML="No">
            Não
          </label>
        </div>
        <span className="titulo-3">
          O aluno entregou o Plano de Compromisso?
        </span>
        <div className="form-check checarForm">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label className="form-check-label" forHTML="Yes">
            Sim
          </label>
        </div>
        <div className="form-check checarForm-1">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label className="form-check-label" forHTML="No">
            Não
          </label>
        </div>

        <p className="linhaForm" />
        <hr />
        <p className="linhaForm" />
        <span className="subtitulo">Texto do Enade</span>
        <p className="fontConteudo">
          Univesp não precisa da ENADE etc. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec ornare lorem malesuada sagittis
          ultrices. Aliquam blandit porta eros, at dignissim neque egestas ut.
          Morbi convallis luctus consequat. Ut eget venenatis dolor. Nulla
          facilisi. Ut vel justo velit. Sed sit amet semper enim. Cras ac turpis
          odio. Fusce sit amet nisl pharetra, semper metus vel, aliquam nisl.
          Pellentesque imperdiet a mi sit amet ultrices. Nunc nec hendrerit
          nisl, id pretium purus.
        </p>
        <p className="fontConteudo">
          Se o aluno fez,
          <br />
          - ano em que se enquadrou
          <br />
          - portaria dizendo ele foi dispensado
          <br />
        </p>
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className=" float-right">
              <Back />
            </div>
          </div>
        </div>
        <p className="linhaForm" />
      </div>
    </div>
  );
};

export default CurseDate;
