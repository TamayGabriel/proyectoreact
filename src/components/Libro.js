import React from "react";

const Libro = ({ name, id, subtitle, imageUrl }) => (
  <div className="col-md-4" key={id}>
    <div className="card mt-4">
      <div className="card-title text-center">
        <h5>{name}</h5>
        <img width="50px" src={imageUrl} alt={name} />
      </div>
      <div className="card-body">{subtitle}</div>
      <div className="card-footer">
        <button className="btn btn-danger">Comprar</button>
      </div>
    </div>
  </div>
);

export default Libro;
