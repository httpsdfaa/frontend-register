import React from 'react';
import './RegistrationTemplate.css';

export default class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = { active: false, cancel: false }

        this.handleClickDone = this.handleClickDone.bind(this)
        this.handleClickCancel = this.handleClickCancel.bind(this)
    }

    handleClickDone(event) {
        event.preventDefault();

        if (this.state.active === false)
            this.setState({ active: true })
    }

    handleClickCancel(event){
        event.preventDefault()

        window.location.reload()
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.active ?
                        <RegistrationEmail />
                        :
                        < section className="registrationName" >
                            <div className="registrationName">
                                <span className="cardVisit">
                                    Novo por aqui? Crie uma conta gratuitamente com a gente
                                </span>
                                <h2>Digite seu nome e sobrenome</h2>
                                <div className="nameInput">
                                    <input type="text" placeholder='Nome' />
                                    <input type="text" placeholder='Sobrenome' />
                                </div>
                                <div className="button">
                                    <button className="nameButton" id="cancel" onClick={this.handleClickCancel}>Cancelar</button>
                                    <button className="nameButton" id="done" onClick={this.handleClickDone}>Pronto</button>
                                </div>
                            </div>
                        </section>
                }
            </React.Fragment>
        )
    }
}

export class RegistrationEmail extends React.Component {
    constructor(props) {
        super(props)
        this.state = { active: false }

        this.handleClickDone = this.handleClickDone.bind(this)
    }

    handleClickDone(event) {
        event.preventDefault();

        if (this.state.active === false)
            this.setState({ active: true })
    }

    handleClickCancel(event){
        event.preventDefault()
        
        window.location.reload()
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.active ?
                        <RegistrationPass />
                        :
                        <section className="registrationEmail">
                            <div className="registrationEmail">
                                <h2>Digite seu nome o seu email</h2>
                                <div className="nameInput">
                                    <input type="email" placeholder='Email' />
                                </div>
                                <div className="button">
                                    <button className="nameButton" id="cancel" onClick={this.handleClickCancel}>Cancelar</button>
                                    <button className="nameButton" id="done" onClick={this.handleClickDone}>Pronto</button>
                                </div>
                            </div>
                        </section>
                }
            </React.Fragment>
        )
    }
}

export class RegistrationPass extends React.Component {
    constructor(props){
        super(props)

        this.handleClickCancel = this.handleClickCancel.bind(this)
    }

    handleClickCancel(event){
        event.preventDefault()
        
        window.location.reload()
    }

    render() {
        return (
            <section className="registrationPass">
                <div className="registrationPass">
                    <h2>Digite sua senha</h2>
                    <div className="nameInput">
                        <input type="password" placeholder='Senha' />
                        <input type="password" placeholder='Digite novamente' />
                    </div>
                    <div className="button">
                        <button className="nameButton" id="cancel" onClick={this.handleClickCancel}>Cancelar</button>
                        <button className="nameButton" id="done">Criar conta</button>
                    </div>
                </div>
            </section>
        )
    }
}