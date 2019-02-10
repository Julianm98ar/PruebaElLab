import React, { Component } from 'react';

class Subscribe extends Component {

    constructor() {
        super()
        this.state = {
            profesores: [],
            listado: []
        }
        this.getTeacher = this.getTeacher.bind(this);
    }

    componentWillMount() {
        var gete =
            "http://localhost/Sistema-master/src/controllers/controller.php?action=profesores&&table=usuarios";
        fetch(gete)
            .then(response => {
                return response.json();
            })
            .then(profesores => {
                this.setState({ profesores: profesores });
            });
    }

    getTeacher(e) {

        var url = "http://localhost/Sistema-master/src/controllers/controller.php";
        var params = {
            "action": "usuarios",
            "Id_teacher": e.target.name
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify(params)
        }).then(response => {
            return response.json()
        }).then(electivas => {
            console.log(electivas)
            this.setState({listado:[...this.state.listado, electivas]})
        });
        console.log(this.state.listado)
    }

    render() {

        const fields = this.state.profesores.map((item, i) => {
            return (
                <li key={i}><a href="#" name={item.Id_profesor} onClick={this.getTeacher}>{item.Nombre_pro}</a></li>
            )
        })

        const values = this.state.listado.map((item, i) => {
            return(
                <tr key={i}>
                    <td>{item.Nombre_pro}</td>
                    <td>{item.Valor_sub}</td>
                </tr>
            )
        })
        return (
            <div className="container">
                <a class='dropdown-trigger btn' href='#' data-target='teachers'>Listado profesores<i className="material-icons right">arrow_drop_down</i></a>
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>Nombre profesor</th>
                            <th>Nombre electiva</th>
                        </tr>
                    </thead>
                    <tbody>
                        {values}
                    </tbody>
                </table>

                <ul id='teachers' class='dropdown-content'>
                    {fields}
                </ul>
            </div>
        )
    }

}

export default Subscribe;