import React, { Component } from 'react';

class Navbar_admin extends Component {
    render() {
        return (
            <div>
                <nav className="nav-extended">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo">
                                College
                            </a>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li>
                                    <a href="sass.html">Cerrar</a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-content">
                            <ul className="tabs tabs-transparent">
                                <li className="tab">
                                    <a href="#gpro " className="active">
                                        Gestion de profesores
                                    </a>
                                </li>
                                <li className="tab">
                                    <a href="#gele">Gestion de electivas</a>
                                </li>
                                <li className="tab">
                                    <a href="#gesu">Gestion de usuarios</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar_admin;