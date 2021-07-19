import React, { Component } from "react";

export default class Card_2 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="col-12 p-1 row" style={{ marginLeft: "0" }}>
        {this.props.datos.map((dato) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 "
            key={dato.id}
          >
            <div className="card border-dark">
              <div className="card-header">
                <h4>{dato.title}</h4>
              </div>
              <div className="card-body">
                <div className="card-text">
                  <p>{dato.published_date}</p>
                  <p>{dato.abstract}</p>
                  {dato.media[0] !== undefined ? (
                    <img
                      style={{ width: "7rem" }}
                      src={dato.media[0]["media-metadata"][0].url}
                      alt={dato.nytdsection}
                    />
                  ) : (
                    <img
                      style={{ width: "7rem", height: "7rem" }}
                      src="https://res.cloudinary.com/dfb6ivozp/image/upload/v1626425269/404_wnujdz.jpg"
                      alt={dato.id}
                    />
                  )}{" "}
                </div>
              </div>
              <a className="moreInfo" href={dato.url}>
                More info...
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
