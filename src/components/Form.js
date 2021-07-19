import React, { useState } from "react";
import { Error } from "./Error";

export const Form = ({ guardarBusqueda }) => {
  const [termino, guardarTermino] = useState("");

  const [error, guardarError] = useState(false);

  const buscarImagenes = (e) => {
    e.preventDefault();

    //   Validar el termino de búsqueda
    if (termino.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    //   Enviar el termino de búsqueda hacia el componente principal
    guardarBusqueda(termino);
  };

  return (
    <form action="" onSubmit={buscarImagenes} className="padding">
      <div className="row">
        <h3 className="form-group col-md-4">
          The following values are allowed:
        </h3>
        <div className="form-group col-md-3">
          <select
            name="categoria"
            id=""
            className="form-control"
            onChange={(e) => guardarTermino(e.target.value)}
          >
            <option className="category" value="">
              - Select Category -
            </option>

            <option key="1" value="1">
              1 day
            </option>
            <option key="7" value="7">
              7 days
            </option>
            <option key="30" value="30">
              30 days
            </option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Search"
          />
        </div>
      </div>
      {error ? <Error mensaje="Add a search term" /> : null}
    </form>
  );
};
