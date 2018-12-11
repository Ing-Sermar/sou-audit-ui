import React from 'react';
import './style.scss';
import Buttonv from '../../components/button';

const Legislation = () => {
  return (
    <div>
      <div className="container">
        <h2 className="title">Legislação</h2>
        <div className="row">
          <h6>LEI DE CRIAÇÃO</h6>
          <p>
            Maecenas commodo, quam vitae fringilla cursus, purus leo hendrerit
            justo, blandit vestibulum tortor tortor ac felis. Praesent eu
            aliquet diam. Ut sollicitudin metus leo, non molestie nisi laoreet
            vel. Morbi vestibulum lorem quis justo iaculis, non congue nulla
            pulvinar. Morbi aliquet fermentum mattis. Duis luctus, lacus non
            volutpat condimentum, diam dui ullamcorper nisi, sollicitudin
            eleifend nulla dui sodales dui. Curabitur commodo est non lorem
            molestie cursus. Praesent nisl felis, tristique sit amet sem at,
            viverra tempus ipsum. Phasellus id eleifend tortor, nec lacinia
            felis. Ut bibendum erat in rutrum mattis. Donec tristique et lacus
            at finibus. Sed eu sollicitudin mauris, nec iaculis nulla.
            Pellentesque vitae ante eu quam pulvinar congue. Morbi eu dolor
            augue.
          </p>
        </div>
        <div className="row">
          <h6>LEI DE CRIAÇÃO</h6>
          <p>
            Maecenas commodo, quam vitae fringilla cursus, purus leo hendrerit
            justo, blandit vestibulum tortor tortor ac felis. Praesent eu
            aliquet diam. Ut sollicitudin metus leo, non molestie nisi laoreet
            vel. Morbi vestibulum lorem quis justo iaculis, non congue nulla
            pulvinar. Morbi aliquet fermentum mattis. Duis luctus, lacus non
            volutpat condimentum, diam dui ullamcorper nisi, sollicitudin
            eleifend nulla dui sodales dui.
          </p>
        </div>
        <div className="row">
          <h6>LEI DE CRIAÇÃO</h6>
          <p>
            Maecenas commodo, quam vitae fringilla cursus, purus leo hendrerit
            justo, blandit vestibulum tortor tortor ac felis. Praesent eu
            aliquet diam. Ut sollicitudin metus leo, non molestie nisi laoreet
            vel. Morbi vestibulum lorem quis justo iaculis, non congue nulla
            pulvinar. Morbi aliquet fermentum mattis. Duis luctus, lacus non
            volutpat condimentum, diam dui ullamcorper nisi, sollicitudin
            eleifend nulla dui sodales dui.
          </p>
        </div>
        <div className="row">
          <h6>LEI DE CRIAÇÃO</h6>
          <p>
            Maecenas commodo, quam vitae fringilla cursus, purus leo hendrerit
            justo, blandit vestibulum tortor tortor ac felis. Praesent eu
            aliquet diam. Ut sollicitudin metus leo, non molestie nisi laoreet
            vel. Morbi vestibulum lorem quis justo iaculis, non congue nulla
            pulvinar. Morbi aliquet fermentum mattis. Duis luctus, lacus non
            volutpat condimentum, diam dui ullamcorper nisi, sollicitudin
            eleifend nulla dui sodales dui.
          </p>
        </div>
        <div className="row">
          <span className="text-check">
            Estou ciente que estas são as leis atuais que se aplicam a esta
            seleção
          </span>
        </div>
        <div className="row">
          <div class="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlfor="exampleCheck1">
              Sim
            </label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck2"
            />
            <label class="form-check-label" htmlfor="exampleCheck2">
              Não
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className=" float-right">
              <Buttonv />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legislation;
