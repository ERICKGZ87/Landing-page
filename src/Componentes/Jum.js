import React from 'react';
import PropType from "prop-types";

export const Jum = ({titulo,texto}) => {
  return (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">{titulo}</h1>
      <p className="lead">{texto}</p>
    </div>
  </div>
  )
}

Jum.PropType={
  titulo: PropType.string,
  texto: PropType.string,
}