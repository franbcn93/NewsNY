import React, { Fragment, useState, useEffect } from "react";
import { Datos } from "./components/Datos";
import { Form } from "./components/Form";
import { myKey } from "./components/Other";
import { Error } from "./components/Error";
import Card_2 from "./components/Card_2";

function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [datos, guardarDatos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      if (busqueda === "") return;

      const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${busqueda}.json?api-key=${myKey}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      // console.log(resultado);
      // console.log(resultado.results);
      console.log(resultado.results);

      if (resultado.results == null) {
        setError(true);
        return;
      }

      setError(false);

      guardarDatos(resultado.results);
    };
    consultarAPI();
  }, [busqueda]);

  return (
    <Fragment>
      <div className="MyApp">
        <h1 className="padding">News API of New York Times</h1>
        <h4 className="padding">
          Returns an array of the most viewed articles on NYTimes.com for
          specified period of time (1 day, 7 days, or 30 days).
        </h4>

        <Form guardarBusqueda={guardarBusqueda} />

        {error ? (
          <Error mensaje="An error has occured" />
        ) : (
          <Card_2 datos={datos} />
        )}
        {/* <Datos datos={datos} /> */}
      </div>
    </Fragment>
  );
}

export default App;
