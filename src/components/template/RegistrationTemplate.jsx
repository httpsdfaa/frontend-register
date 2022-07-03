import React from 'react';
import './RegistrationTemplate.css';
import './index.css'
import { Link } from 'react-router-dom';
import { ErrorRequired } from '../Constants'

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
        this.handleChangePass_Again = this.handleChangePass_Again.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeName(event) {
        this.setState({
            valueNAME: event.target.value
        })
    }

    handleChangeSurname(event) {
        this.setState({
            valueSURNAME: event.target.value
        })
    }

    handleChangeEmail(event) {
        this.setState({
            valueEMAIL: event.target.value
        })
    }

    handleChangePass(event) {
        this.setState({
            valuePASS: event.target.value
        })
    }

    handleChangePass_Again(event) {
        this.setState({
            valuePASS_AGAIN: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const inputNAME = this.state.valueNAME
        const inputSURNAME = this.state.valueSURNAME
        const inputEMAIL = this.state.valueEMAIL
        const inputPASS = this.state.valuePASS
        const inputPASS_AGAIN = this.state.valuePASS_AGAIN

        if (inputNAME === '' || inputSURNAME === '' || inputEMAIL === '' || inputPASS === '' || inputPASS_AGAIN === '') {
            this.setState({ errorRequired: true })

            setTimeout(() => {
                this.setState({
                    errorRequired: false
                })
            }, 5000);

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
                        <Link to="/login"><span className='loginAccount'>Faça login aqui</span></Link>
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
                                    onChange={this.handleChangePass_Again} />
                            </div>
                            <div className="error">
                                {
                                    this.state.errorRequired ?
                                        <ErrorRequired />
                                        : null
                                }
                            </div>
                            <div className="button">
                                <button className="nameButton" id="cancel">Cancelar</button>
                                <button className="nameButton" id="done" >Pronto</button>
                            </div>
                        </form>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}