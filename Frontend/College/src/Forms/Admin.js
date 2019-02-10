import React, { Component } from "react";
import Navbar from "./Objects/Nabvar_admin";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
      profesores: [],
      electivas: [],
      suball: [],
      id: "",
      name: "",
      count: "",
      email: "",
      password: "",
      retype: "",
      idSelect: "",
      elective:""

    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createTeacher = this.createTeacher.bind(this);
    this.createElective = this.createElective.bind(this);
    this.createUser = this.createUser.bind(this);
    this.setId = this.setId.bind(this);
    this.setSelect = this.setSelect.bind(this);
  }

  setId(e) {
    this.setState({
      id: e.target.name
    });
  }

  createTeacher(e) { 
    e.preventDefault();
    var url = "http://localhost/Sistema-master/src/controllers/controller.php";
    var params = {
      "action":"profesores",
      "name":this.state.name,
      "elective":this.state.elective,
      "count":this.state.count
    }
    console.log(params)
    fetch(url, {
      method: "POST",
      body: JSON.stringify(params)
    }).then(response =>{
      console.log(response)
      return response.json()
    }).then(response => {
        if (response.statusCode == 204) {
          window.M.toast({
            html:
              "Se ha registrado de manera exitosa este profesor"
          });
        } else {
          window.M.toast({ html: "Ha habido un error creando este profesor" });
        }
      });
  }

  createUser(e) {
    e.preventDefault();
    var url = "http://localhost/Sistema-master/src/controllers/controller.php";
    var params = {
      action: "usuarios",
      email: this.state.email,
      code: "empty",
      password: this.state.password,
      retype: this.state.retype
    };
    console.log(params)
    fetch(url, {
      method: "POST",
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(response => {
        if (response.statusCode == 204) {
          window.M.toast({
            html:
              "Se ha registrado de manera exitosa este usuario"
          });
        } else {
          window.M.toast({ html: "Ha habido un error creando este usuario" });
        }
      });
  }

  setSelect(e) {
    var url = "http://localhost/Sistema-master/src/controllers/controller.php";
  
    this.setState({ idSelect: e.target.name })
    
  }

  createElective(e) {
    e.preventDefault();
    var url = "http://localhost/Sistema-master/src/controllers/controller.php";
    var params = {
      action: "electivas",
      Sub_value: this.state.name,
      Count_sub: this.state.count
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(response => {
        if (response.statusCode == 204) {
          window.M.toast({
            html:
              "Se ha registrado de manera exitosa esta electiva, debera asignarle un profesor para que sea visible"
          });
        } else {
          window.M.toast({ html: "Ha habido un error creando esta electiva" });
        }
      });
  }

  componentDidMount() {
    var gete =
      "http://localhost/Sistema-master/src/controllers/controller.php?action=electivas&&table=usuarios&&data=asdf";
    fetch(gete)
      .then(response => {
        return response.json();
      })
      .then(suball => {
        this.setState({ suball: suball });
      });
    var urlu =
      "http://localhost/Sistema-master/src/controllers/controller.php?action=usuarios&&table=usuarios";
    fetch(urlu)
      .then(response => {
        return response.json();
      })
      .then(usuarios => {
        this.setState({ usuarios: usuarios });
      });
    var urlp =
      "http://localhost/Sistema-master/src/controllers/controller.php?action=profesores&&table=profesores";
    fetch(urlp)
      .then(response => {
        return response.json();
      })
      .then(profesores => {
        this.setState({ profesores: profesores });
      });
    var urle =
      "http://localhost/Sistema-master/src/controllers/controller.php?action=electivas&&table=electivas";
    fetch(urle)
      .then(response => {
        return response.json();
      })
      .then(electivas => {
        this.setState({ electivas: electivas });
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleUpdate(e) {
    e.preventDefault();
    var params;
    var url = "http://localhost/Sistema-master/src/controllers/controller.php";
    if (e.target.name == "usuarios") {
      params = {
        "action": "usuarios",
        "Id_user": this.state.id,
        "email": this.state.email,
        "password": this.state.password
      }
      console.log(params);
    } else if (e.target.name === "profesores") {
      alert("profesores");
      params = {
        "action": "profesores",
        "Id_teacher": this.state.id,
        "name": this.state.name,
        "elective": this.state.idSelect
      }
    } else {
      params = {
        "action": "electivas",
        "Id_subdomain": this.state.id,
        "Sub_value": this.state.name,
        "Count_sub": this.state.count
      }
    }
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(params)
    }).then(response => {
      return response.json()
    }).then(response => {
      if (response.statusCode == 204) {
        window.M.toast({
          html: "Se ha realizado la actualizacion de manera correcta, por favor actualice la pagina para ver los cambios"
        });
      } else {
        window.M.toast({ html: "No se ha podido actualizar" });
      }
    });
  }

  handleDelete(e) {
    e.preventDefault();
    var params;
    var url = "http://localhost/Sistema-master/src/controllers/controller.php";
    if (e.target.name == "usuarios") {
      params = {
        action: "usuarios",
        Id_user: e.target.value
      };
      console.log(params)
    } else if (e.target.name == "profesores") {
      params = {
        action: "profesores",
        Id_teacher: e.target.value
      };
    } else {
      params = {
        action: "electivas",
        Id_teacher: e.target.name,
        Id_subdomain: e.target.value
      };
    }
    fetch(url, {
      method: "DELETE",
      body: JSON.stringify(params)
    }).then(response => {
      return response.json()
    }).then(response => {
      if (response.statusCode == 204) {
        window.M.toast({
          html: "Se ha realizado la eliminacion de manera exitosa, por favor reacrgue para visualizar los cambios"
        });
      } else {
        window.M.toast({ html: "No se ha podido eliminar este usuario" });
      }
    });
  }

  handleSelect(e) {
    e.preventDefault();

    /*fetch(urle)
      .then(response => {
        return response.json();
      })
      .then(electivas => {
        this.setState({ 'electivas': electivas })
      });*/
  }

  render() {
    const users = this.state.usuarios.map((item, i) => {
      return (
        <tr key={i}>
          <td>{item.Id_usuario}</td>
          <td>{item.Correo_usu}</td>
          <td>{item.Valor_sub}</td>
          <td>
            <a
              className="btn modal-trigger"
              href="#uuse"
              name={item.Id_usuario}
              onClick={this.setId}
            >
              Update__
              <i className="material-icons left">update</i>
            </a>
          </td>
          <td>
            <button
              className="btn"
              onClick={this.handleDelete}
              value={item.Id_usuario}
              name="usuarios"
            >
              Eliminar<i className="material-icons left">delete </i>
            </button>
          </td>
        </tr>
      );
    });

    const elective = this.state.electivas.map((item, i) => {
      return (
        <tr key={i}>
          <td>{item.Id_subdominio}</td>
          <td>{item.Valor_sub}</td>
          <td>{item.Nombre_pro}</td>
          <td>{item.Descripcion_sub}</td>
          <td>{item.Aux1_sub}</td>
          <td>
            <a
              className="btn modal-trigger"
              href="#uele"
              name={item.Id_subdominio}
              onClick={this.setId}
            >
              Update__
              <i className="material-icons left">update</i>
            </a>
          </td>
          <td>
            <button
              className="btn"
              onClick={this.handleDelete}
              value={item.Id_subdominio}
              name={item.Id_profesor}
            >
              Eliminar<i className="material-icons left">delete </i>
            </button>
          </td>
        </tr>
      );
    });

    const teachers = this.state.profesores.map((item, i) => {
      return (
        <tr key={i}>
          <td>{item.Id_profesor}</td>
          <td>{item.Nombre_pro}</td>
          <td>{item.Valor_sub}</td>
          <td>
            <a
              className="btn modal-trigger"
              href="#upro"
              name={item.Id_profesor}
              onClick={this.setId}
            >
              Update__
              <i className="material-icons left">update</i>
            </a>
          </td>
          <td>
            <button
              className="btn"
              onClick={this.handleDelete}
              value={item.Id_profesor}
              name="profesores"
            >
              Eliminar<i className="material-icons left">delete</i>
            </button>
          </td>
        </tr>
      );
    });

    const valores = this.state.suball.map((item, i) => {
      return (
        <li key={i}><a href="#" name={item.Id_subdominio} onClick={this.setSelect}>{item.Valor_sub}</a></li>
      );
    });

    return (
      <div>
        <Navbar />
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Cerrar</a>
          </li>
        </ul>

        <div className="container">
          <div id="gpro">
            <br />
            <br />
            <a className="btn modal-trigger" href="#cpro">
              Crear
              <i className="material-icons left" data-target="">
                add
              </i>
            </a>
            <table className="responsive-table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre profesor</th>
                  <th>Electiva asociada</th>
                  <th>Accion 1</th>
                  <th>Accion 2</th>
                </tr>
              </thead>
              <tbody>{teachers}</tbody>
            </table>
          </div>

          <div id="gesu">
            <br />
            <br />
            <a href="#cuse" className="btn modal-trigger">
              Crear<i className="material-icons left">add</i>
            </a>
            <br />
            <div className="input-field col s12">
              <select>
                <option disabled selected>
                  Selecciona tu opcion
                </option>
              </select>
              <label>Filtrar por electivas</label>
            </div>
            <table className="responsive-table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Correo usuario</th>
                  <th>Electiva asociada</th>
                  <th>Accion 1</th>
                  <th>Accion 2</th>
                </tr>
              </thead>
              <tbody>{users}</tbody>
            </table>
          </div>

          <div id="gele">
            <br />
            <br />
            <a href="#cele" className="btn modal-trigger">
              Crear<i className="material-icons left">add</i>
            </a>
            <table className="responsive-table">
              <thead>
                <tr>
                  <th>Id </th>
                  <th>Nombre</th>
                  <th>Profesor asociado</th>
                  <th>Descripcion</th>
                  <th>Cupos</th>
                  <th>Accion 1</th>
                  <th>Accion 2</th>
                </tr>
              </thead>
              <tbody>{elective}</tbody>
            </table>
          </div>
        </div>

        <div id="cpro" className="modal">
          <div className="modal-content">
            <h4>Crear profesor</h4>
            <p>
              Por favor llene los campos correspondientes, para registrar un
              profesor
            </p>
            <form>
              <div className="input-field">
                <input type="text" name="name" onChange={this.handleChange} id="nameet" />
                <label htmlFor="nameet">Nombre profesor</label>
              </div>
              <div className="input-field">
                <input type="text" name="elective" onChange={this.handleChange} id="counttt" />
                <label htmlFor="counttt">Electiva</label>
              </div>
              <div className="input-field">
                <input type="number" name="count" onChange={this.handleChange} id="counttt" />
                <label htmlFor="counttt">Cupos</label>
              </div>
              <button className="btn right" onClick={this.createTeacher} style={{marginBottom: 20 + "px"}}>
                Crear profesor<i className="material-icons left">add</i>
              </button>
              </form>
          </div>
        </div>

        <div id="upro" className="modal">
          <div className="modal-content">
            <h4>Actualizar profesor</h4>
            <p>
              Por favor llene los campos correspondientes, para actualizar al
              profesor
            </p>
            <form>
              <div className="input-field">
                <input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  id="nameu"
                />
                <label htmlFor="nameu">Nombre profesor</label>
              </div>
              <a class='dropdown-trigger btn' href='#' data-target='electives'>Listado electivas<i className="material-icons right">arrow_drop_down</i></a>
                
              <ul id='electives' class='dropdown-content'>
                {valores}
              </ul>
              <br></br><br></br><br></br>
              <button className="btn right" name="profesores" onClick={this.handleUpdate} style={{marginBottom: 20 + "px"}}>
                Actualizar profesor<i className="material-icons left">add</i>
              </button>
            </form>
          </div>
        </div>

        <div id="cele" className="modal">
          <div className="modal-content">
            <h4>Crear electiva</h4>
            <p>
              Por favor llene los campos correspondientes, para registrar una
              electiva
            </p>
            <form>
              <div className="input-field">
                <input
                  type="text"
                  name="name"
                  id="namee"
                  onChange={this.handleChange}
                />
                <label htmlFor="namee">Nombre electiva</label>
              </div>
              <div className="input-field">
                <input
                  type="number"
                  id="count"
                  name="count"
                  onChange={this.handleChange}
                />
                <label htmlFor="count">Cupos</label>
              </div>
              <button className="btn" onClick={this.createElective}>
                Crear electiva<i className="material-icons left">add</i>
              </button>
            </form>
          </div>
        </div>

        <div id="uele" className="modal">
          <div className="modal-content">
            <h4>Actualizar electiva</h4>
            <p>
              Por favor llene los campos correspondientes, para actualizar una
              electiva
            </p>
            <form>
              <div className="input-field">
                <input
                  type="text"
                  name="name"
                  id="namee"
                  onChange={this.handleChange}
                />
                <label htmlFor="namee">Nombre electiva</label>
              </div>
              <div className="input-field">
                <input
                  type="number"
                  id="count"
                  name="count"
                  onChange={this.handleChange}
                />
                <label htmlFor="count">Cupos</label>
              </div>
              <button className="btn" name="electivas" onClick={this.handleUpdate}>
                actualizar electiva<i className="material-icons left">update</i>
              </button>
            </form>
          </div>
        </div>

        <div id="cuse" className="modal">
          <div className="modal-content">
            <h4>Crear usuario</h4>
            <p>
              Por favor llene los campos correspondientes, para registrar un
              usuario
            </p>
            <form>
              <div className="input-field">
                <input type="email" id="email" name="email" onChange={this.handleChange} />
                <label htmlFor="email">Correo electronico</label>
              </div>
              <div className="input-field">
                <input type="password" id="password" name="password" onChange={this.handleChange} />
                <label htmlFor="password">Contraseña</label>
              </div>
              <div className="input-field">
                <input type="password" id="retype" name="retype" onChange={this.handleChange} />
                <label htmlFor="retype">Confirme contraseña</label>
              </div>
              <button className="btn" onClick={this.createUser}>
                Crear usuario<i className="material-icons left">add</i>
              </button>
            </form>
          </div>
        </div>

        <div id="uuse" className="modal">
          <div className="modal-content">
            <h4>Actualizar usuario</h4>
            <p>
              Por favor llene los campos correspondientes, para actualizar un
              usuario
            </p>
            <form>
              <div className="input-field">
                <input type="email" id="email" name="email" onChange={this.handleChange} />
                <label htmlFor="email">Correo electronico</label>
              </div>
              <div className="input-field">
                <input type="password" id="password" name="password" onChange={this.handleChange} />
                <label htmlFor="password">Contraseña</label>
              </div>
              <button className="btn" name="usuarios" onClick={this.handleUpdate}>
                Actualizar usuario<i className="material-icons left">add</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
