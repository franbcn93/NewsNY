import React, { Component } from "react";

export default class Imagen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.dato.media[0] !== undefined ? (
          <img
            className="imgWindow"
            src={this.props.dato.media[0]["media-metadata"][2].url}
            alt={this.props.dato.nytdsection}
          />
        ) : (
          <img
            className="imgWindow"
            style={{
              height: "11rem",
            }}
            src="https://res.cloudinary.com/dfb6ivozp/image/upload/v1626425269/404_wnujdz.jpg"
            alt={this.props.dato.id}
          />
        )}{" "}
      </div>
    );
  }
}
