import React from "react";
import "../../styles/index.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron col-12 bg-light p-3 rounded">
        <h1 className="display-4"> Cursos de LESCO CR!</h1>
        <p> Te invitamos a empezar tu camino de aprendizaje de la LESCO y de la Cultura Sorda con nosotros. </p>
        <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button"> Información</a>
        </p>
    </div>
    )
}
export default Jumbotron; 

