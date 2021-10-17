import React from "react";
import PropType from "prop-types";

export const Card = ({img,titulo,texto,boton,goTo}) => {
  return (
    <div className="card">
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{texto}</p>
      <a href={boton} className="btn btn-primary">{goTo}</a>
    </div>
  </div>
  )
}
Card.PropType = {
img : PropType.string,
titulo: PropType.string,
texto: PropType.string,
boton:PropType.string,
goTo: PropType.string,

}


