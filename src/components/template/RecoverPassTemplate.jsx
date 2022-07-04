import React from 'react';
import './RecoverPassTemplate.css';
import './index.css'
import { Link } from 'react-router-dom';
import { ErrorRequired } from '../Constants';

export default class RecoverPassTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueEMAIL: '',
            errorRequired: false
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({
            valueEMAIL: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const email = this.state.valueEMAIL

        if(email === ''){
            this.setState({
                errorRequired: true
            })

            setTimeout(() => {
                this.setState({
                    errorRequired: false
                })
            }, 5000)
        }
    }

    render() {
        return (
            <section className="recoverPass">
                <div className="recoverPass">
                    <h2>Esqueceu sua senha?</h2>
                    <Link to="/inscreva-se">Não possui uma conta?</Link>
                    <form onSubmit={this.handleSubmit}>
                        <div className="nameInput">
                            <input type="email" placeholder='Email'
                            value={this.state.valueEMAIL}
                            onChange={this.handleChangeEmail}/>
                        </div>
                        <div className="error">
                            {
                                this.state.errorRequired ?
                                    <ErrorRequired />
                                    : null
                            }
                        </div>
                        <div className="button">
                            <button className="nameButton" id="done">Pronto</button>
                        </div>
                    </form>
                    <div className="button">
                        <Link to="/"><button className="nameButton" id="cancel">Cancelar</button></Link>
                    </div>
                </div>
            </section>
        )
    }
}