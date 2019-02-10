import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect} from 'react-router-dom';
import Home from './Home';

class Session extends Component {
  
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.state = {
      action: "usuarios",
      email:'',
      code:'',
      password:'',
      retype:''
    }
  }

  login(e) {
    e.preventDefault();
    var login = {
      action: "usuarios",
      email: this.state.email,
      password: this.state.password
    }
    console.log(login);
    fetch (`http://localhost/Sistema-master/src/controllers/controller.php` , {
      method: 'POST',
      body: JSON.stringify(login)
    }).then(response => {
      return response.json()
    })
    .then(response => {
      if(response.statusCode == 205){
        window.M.toast({html: 'El usuario ha ingresado'});
       // return(<Redirect to="/Admin" push={true}/>);
        document.location.href = "/"
      }else if(response.statusCode == 204){
        window.M.toast({html: 'El administrador ha ingresado'})
        document.location.href = "/Admin"
      }else{
        window.M.toast({html: 'Error iniciando sesion, por favor verifique su contraseña o correo electronico'})
      }
    });
  }

  register(e){
    e.preventDefault();
    console.log(JSON.stringify(this.state))
    fetch (`http://localhost/Sistema-master/src/controllers/controller.php` , {
      method: 'POST',
      body: JSON.stringify(this.state)
    })
    .then(response => 
        response.json()
      )
    .then(response => {
      if(response.statusCode == 204){
        window.M.toast({html: 'El usuario ha sido registrado de manera exitosa'})
      }else{
        window.M.toast({html: 'No se ha podido registrar este usuario'})
      }
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div id="background">
        <div className="container">
          <div className="card-panel hoverable">
            <div className="row">
              <div className="col s12 m7 l6 xl5">
                <a href="/"><i className="material-icons medium">arrow_back</i></a>
                <br></br>
                <ul className="tabs">
                  <li className="tab col active"><a href="#login">Iniciar</a></li>
                  <li className="tab col"><a href="#signup">Registrarse</a></li>
                </ul>

                <div id="login">
                  <form>
                    <div className="input-field">
                      <input type="email" id="emails" name="email" onChange={this.handleChange} />
                      <label htmlFor="emails">Correo electronico</label>
                    </div>
                    <div className="input-field">
                      <input type="password" id="passwords" name="password" onChange={this.handleChange}/>
                      <label htmlFor="passwords">Contraseña</label>
                    </div>
                    <button className="btn right" type="submit" onClick={this.login}>Iniciar</button>
                  </form>
                  <br></br>
                </div>

                <div id="signup">
                  <form>
                    <div className="input-field">
                      <input type="email" id="email" name="email" onChange={this.handleChange}/>
                      <label htmlFor="email">Correo electronico</label>
                    </div>
                    <div className="input-field">
                      <input type="number" id="code" name="code" onChange={this.handleChange}/>
                      <label htmlFor="code">Codigo estudiante</label>
                    </div>
                    <div className="input-field">
                      <input type="password" id="password" name="password" onChange={this.handleChange}/>
                      <label htmlFor="password">Contraseña</label>
                    </div>
                    <div className="input-field">
                      <input type="password" id="retype" name="retype" onChange={this.handleChange}/>
                      <label htmlFor="retype">Confirme contraseña</label>
                    </div>
                    <button className="btn right" type="submit" onClick={this.register}>Registrarme</button>
                  </form>
                </div>
              </div>

              <div className="col m5 l6 xl6">
                <img src="IMG/Login/flat-img.jpg" className="responsive-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Session;
