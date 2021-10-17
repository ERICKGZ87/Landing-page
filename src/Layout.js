
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

            <Jum/>

            </div>
            <div className="row">
            
                <div className="col-sm-3">
                <Card/>

                </div>

                <div className="col-sm-3">
                <Card/>
                </div>

                <div className="col-sm-3">
                <Card/>
                </div>

                <div className="col-sm-3">
                <Card/>
                </div>
            </div>

            <div className="row">
            <Footer/>
            </div>
        </div>





    )


}
