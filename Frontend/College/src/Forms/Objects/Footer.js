import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col s6 m4 l4">
                            <h5>College</h5>
                            <br></br>
                            <p>La universidad de electivas, la mejor en el pais y el mundo</p>
                        </div>

                        <div className="col s6 m4 l4">
                            <h5>Contactos</h5>
                            <br></br>
                            <p>julianm98ar@gmail.com</p>
                            <p>318-581-36-01</p>
                        </div>

                        <div className="col s12 m4 l4">
                            <h5>Mapa del sitio</h5>
                            <br></br>
                            <a href="/Session">Inicio</a>
                            <br></br>
                            <a href="/Session">Registrar</a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <h5><center>Derechos reservados</center></h5>
                </div>
            </footer>
        );
    }
}

export default Footer;