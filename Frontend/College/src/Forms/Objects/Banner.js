import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="container">
                <div className="card hoverable">
                    <div className="row">
                        <div className="col s12 m12 l12 xl6" id="img-banner">
                            <img src="IMG/Start/Banner-index.jpg" placeholder="joven estudiando" className="responsive-img" style={{padding:0}}/>
                        </div>
                        <div className="col s12 m12 l12 xl5" id="text-banner">
                            <h4>Inscribete</h4>
                            <br></br>
                            <p style={{paddingRight: 50 + "px"}}>Podras escojer entre distintas areas de conocimiento, para afianzar mas un area en especifico. Si deseas ver el listado de electivas. da click en registrarse
                            para poder acceder al listado y separar tu cupo</p>
                            <a href="/Session" className="btn" style={{marginTop:30+"px"}}>¡Registrarme!</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;