import React from 'react';
import './RegistrationTemplate.css';
import './index.css'
import { Link } from 'react-router-dom';
import { ErrorRequired } from '../Constants';
import { URL } from '../../config';
import axios from 'axios';

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueNAME: '',
            valueSURNAME: '',
            valueEMAIL: '',
            valuePASS: '',
            valuePASS_AGAIN: '',
            errorRequired: false
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangePASS_AGAIN = this.handleChangePASS_AGAIN.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeName(event) {
        this.setState({
            valueNAME: event.target.value,
            errorRequired: false
        })
    }

    handleChangeSurname(event) {
        this.setState({
            valueSURNAME: event.target.value,
            errorRequired: false
        })
    }

    handleChangeEmail(event) {
        this.setState({
            valueEMAIL: event.target.value,
            errorRequired: false
        })
    }

    handleChangePass(event) {
        this.setState({
            valuePASS: event.target.value,
            errorRequired: false
        })
    }

    handleChangePASS_AGAIN(event) {
        this.setState({
            valuePASS_AGAIN: event.target.value,
            errorRequired: false
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const firstName = this.state.valueNAME
        const surname = this.state.valueSURNAME
        const email = this.state.valueEMAIL
        const pass = this.state.valuePASS
        const passAGAIN = this.state.valuePASS_AGAIN

        if (firstName === '' || surname === '' || email === '' || pass === '' || passAGAIN === '') {
            this.setState({ errorRequired: true })

            setTimeout(() => {
                this.setState({
                    errorRequired: false
                })
            }, 5000);

        } else {
            axios.post(URL.dev_register, {
                data: {
                    firstName: firstName,
                    surname: surname,
                    email: email,
                    pass: pass
                }
            })
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="registrationName" >
                    <div className="registrationName">
                        <span className="cardVisit">
                            Novo por aqui? Crie uma conta gratuitamente com a gente
                        </span>
                        <h2>Digite seu nome e sobrenome</h2>
                        <Link to="/login">Faça login aqui</Link>
                        <form onSubmit={this.handleSubmit}>
                            <div className="nameInput">
                                <input type="text" placeholder='*Nome'
                                    value={this.state.valueNAME}
                                    onChange={this.handleChangeName} />
                                <input type="text" placeholder='*Sobrenome'
                                    value={this.state.valueSURNAME}
                                    onChange={this.handleChangeSurname} />
                                <input type="email" placeholder='*Email'
                                    value={this.state.valueEMAIL}
                                    onChange={this.handleChangeEmail} />
                                <input type="password" placeholder='*Senha'
                                    value={this.state.valuePASS}
                                    onChange={this.handleChangePass} />
                                <input type="password" placeholder='*Digite novamente'
                                    value={this.state.valuePASS_AGAIN}
                                    onChange={this.handleChangePASS_AGAIN} />
                            </div>
                            <div className="error">
                                {
                                    this.state.errorRequired ?
                                        <ErrorRequired />
                                        : null
                                }
                            </div>
                            <div className="button">
                                <button type="submit" className="nameButton" id="done">Pronto</button>
                            </div>
                        </form>
                        <div className="button">
                            <Link to="/"><button type="submit" className="nameButton" id="cancel">Cancelar</button></Link>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}