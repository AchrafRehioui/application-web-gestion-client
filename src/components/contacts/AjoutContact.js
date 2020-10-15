import React, { Component } from 'react'
import { Consumer } from '../context';

class AjoutContact extends Component {

    state = {
        name: '',
        email: '',
        telephone: ''
    }

    onChangeInput = (e) => this.setState({ [e.target.name]: e.target.value })

    submit = (dispatch, size, e) => {
        e.preventDefault();
        dispatch({
            type: "AJOUT_CONTACT",
            payload: {
                id: size + 1,
                name: this.state.name,
                email: this.state.email,
                tel: this.state.telephone
            }
        })

        this.setState({
            name: '',
            email: '',
            telephone: ''
        })
    }

    render() {
        const { name, email, telephone } = this.state;
        return (
            <Consumer>
                { value => {
                    const { dispatch } = value;
                    return (
                        <div>
                            <form onSubmit={this.submit.bind(this, dispatch, value.contacts.length)}>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Ajout Contact</h4>
                                        <div className="card-text">
                                            <div className="form-group">
                                                <label htmlFor="">Nom</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="name"
                                                    defaultValue={name}
                                                    onChange={this.onChangeInput}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Email</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="email"
                                                    defaultValue={email}
                                                    onChange={this.onChangeInput}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Telephone</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="telephone"
                                                    defaultValue={telephone}
                                                    onChange={this.onChangeInput}
                                                />
                                            </div>
                                            <button className="btn btn-success btn-block">Ajout un nouveau Contact</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AjoutContact;