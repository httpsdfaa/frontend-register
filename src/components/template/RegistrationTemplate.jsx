import React from 'react';
import './RegistrationTemplate.css';

export default class Registration extends React.Component {

    render() {
        return (
            <section className="registrationName">
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
                        <button className="nameButton">Cancelar</button>
                        <button className="nameButton">Pronto</button>
                    </div>
                </div>
            </section>
        )
    }
}

export class RegistrationEmail extends React.Component {

    render() {
        return (
            <section className="registrationEmail">
                Email cadastro
            </section>
        )
    }
}

export class RegistrationPass extends React.Component {

    render() {
        return (
            <section className="registrationPass">
                Cadastro senha
            </section>
        )
    }
}