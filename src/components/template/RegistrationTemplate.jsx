import React from 'react';
import './RegistrationTemplate.css';
import './index.css'
import { Link } from 'react-router-dom';

export default class Registration extends React.Component {

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
                        <div className="nameInput">
                            <input type="text" placeholder='Nome' />
                            <input type="text" placeholder='Sobrenome' />
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Senha' />
                            <input type="password" placeholder='Digite novamente' />
                        </div>
                        <div className="button">
                            <button className="nameButton" id="cancel">Cancelar</button>
                            <button className="nameButton" id="done">Pronto</button>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}