import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <a href="/" className="brand-logo">College</a>
                        <a href="#" className="sidenav-trigger" data-target="mobile-demo">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/Session">Iniciar<i className="right material-icons">account_circle</i></a></li>
                            <li><a href="/Session">Registrar<i className="right material-icons">account_circle</i></a></li>
                        </ul>
                    </div>
                </div>
                <ul className="sidenav" id="mobile-demo">
                    <li>
                        <a href="/Session">Iniciar</a>
                    </li>
                    <li>
                        <a href="/Session">Registrarse</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;