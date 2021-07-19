import React, { Fragment } from "react";
import { Card } from "./Card";

export const Datos = ({ datos }) => {
  return (
    <div className="col-12 p-1 row" style={{ marginLeft: "0" }}>
      {datos.map((dato) => (
        <Fragment key={dato.asset_id}>
          <Card dato={dato} />
        </Fragment>
      ))}
    </div>
  );
};
