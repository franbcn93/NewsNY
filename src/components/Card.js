import React from "react";

export const Card = ({ dato }) => {
  const { published_date, title, url, abstract } = dato;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
      <div className="card border-dark">
        <div className="card-header">
          <h4>{title}</h4>
        </div>
        <div className="card-body">
          <div className="card-text">
            <p>{published_date}</p>
            <p>{abstract}</p>
            <img
              style={{ width: "95%" }}
              src="https://static01.nyt.com/images/2021/07/19/obituaries/19Gilmer-obit/15Gilmer-mediumThreeByTwo440.jpg"
              alt=""
            />
            <a href={url}>More info...</a>
          </div>
        </div>
      </div>
    </div>
  );
};
