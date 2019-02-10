import React, { Component } from 'react';


class Card extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        var params = [
            {
                "name": "Julian",
                "description": "Soy el mejor en el vecindario",
                "img":"IMG/Start/boss.svg"
            },
            {
                "name": "John Doe",
                "description": "Hijo de el profesor generico 2",
                "img":"IMG/Start/boy.svg"
            },
            {

                "name": "Jane Doe",
                "description": "La esposa del profesor generico",
                "img":"IMG/Start/girl.svg"
            },
            {

                "name": "John Doe II",
                "description": "hijo del profesor generico ",
                "img":"IMG/Start/man.svg"
            }
        ]
        this.setState({data:params})
    }
    render() {
        const cards = this.state.data.map((item, i) => {
            return (
                <div className="col s6 m4 l4 xl3">
                    <div className="card hoverable">
                        <div className="card-content">
                            <img src={item.img} className="responsive-img circle" />
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            )
        })
        return (

            <div className="container">
                <div className="row">
                    {cards}
                </div>
            </div>

        );
    }
}

export default Card;