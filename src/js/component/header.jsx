import React from "react";
import "../../styles/index.css";

function Header(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand">Start </a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="menu collapse navbar-collapse" id="navbarsExample03">

            <ul className="navbar-nav ms-auto mb-2 mb-sm-0 navbar-dark bg-dark">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">¿Quiénes Somos?</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cursos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Contacto</a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
    )
}
export default Header; 

