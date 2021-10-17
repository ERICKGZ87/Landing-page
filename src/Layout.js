import PropType from "prop-types";
import { Navbarr} from "./Componentes/Navbarr";
import { Jum } from "./Componentes/Jum";
import {Card} from "./Componentes/Card";
import {Footer} from "./Componentes/Footer";

export const Layout =() => {

    return (
        <div className="container">
            <div className="row">

                <div className="col-sm-2" />

                <div className="col-sm-8">

                  <Navbarr/>

                </div>

                <div className="col-sm-2" />

            </div>

            <div className="row">

            <Jum titulo={"soy erick"} texto={"Estoy utilizando props de react"}/>

            </div>
            <div className="row">
            
                <div className="col-sm-3">
                <Card img={"./logo192.png"} titulo={"hola"} texto={"hola mundo"} boton={"https://en.wikipedia.org/wiki/Bob_Dylan"} goTo={"ver en wiki"} />

                </div>

                <div className="col-sm-3">
                <Card img={"./logo192.png"} titulo={"hola"} texto={"soy erick"} boton={"https://en.wikipedia.org/wiki/Bob_Dylan"} goTo={"ver en amazon"} />
                </div>

                <div className="col-sm-3">
                <Card img={"./logo192.png"} titulo={"hola"} texto={"Reutilizando un componente"} boton={"https://en.wikipedia.org/wiki/Bob_Dylan"} goTo={"ver en wiki"} />
                </div>

                <div className="col-sm-3">
                <Card img={"./logo192.png"} titulo={"hola"} texto={"es genial usar react"} boton={"https://en.wikipedia.org/wiki/Bob_Dylan"} goTo={"ver en google"} />
                </div>
            </div>

            <div className="row">
            <Footer/>
            </div>
        </div>





    )


}
