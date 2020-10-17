import React, { Component } from 'react'
import { Consumer } from '../context';
import GroupeTextesInput from '../assistants/GroupeTextesInput';

class AjoutContact extends Component {

    state = {
        name: '',
        email: '',
        telephone: '',
        errors: {}
    }

    onChangeInput = (e) => this.setState({ [e.target.name]: e.target.value })

    submit = (dispatch, size, e) => {
        e.preventDefault();

        const {name, email, telephone} = this.state;

        if(name == ""){
            this.setState({errors: {name: "Le nom est obligatoire!"}})
            return;
        }

        if(email == ""){
            this.setState({errors: {email: "L'email est obligatoire!"}})
            return;
        }

        if(telephone == ""){
            this.setState({errors: {telephone: "Le telephone est obligatoire!"}})
            return;
        }

        dispatch({
            type: "AJOUT_CONTACT",
            payload: {
                id: size + 1,
                name: this.state.name,
                email: this.state.email,
                telephone: this.state.telephone
            }
        })

        this.setState({
            name: '',
            email: '',
            telephone: '',
            errors: {}

        })
        /* Pour la redirection à la page liste des contacts */
        this.props.history.push('/');
    }

    render() {
        const { name, email, telephone, errors } = this.state;
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
                                            <GroupeTextesInput 
                                                    label="Name" 
                                                    type="text"
                                                    name="name" 
                                                    value={name}
                                                    onChange={this.onChangeInput}
                                                    error={errors.name}
                                            />
                                             <GroupeTextesInput 
                                                    label="Email" 
                                                    type="email"
                                                    name="email" 
                                                    value={email}
                                                    onChange={this.onChangeInput}
                                                    error={errors.email}
                                            />
                                             <GroupeTextesInput 
                                                    label="Telephone"
                                                    type="text" 
                                                    name="telephone" 
                                                    value={telephone}
                                                    onChange={this.onChangeInput}
                                                    error={errors.telephone}
                                            />
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