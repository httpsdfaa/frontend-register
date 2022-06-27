import React from 'react';
import './TempPrincipal.css';

import LoginTemplate from './LoginTemplate';
import RecoverPassTemplate from './RecoverPassTemplate';

import RegistrationTemplate from './RegistrationTemplate';



export default class TemplatePrincipal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { active: false }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        if (this.state.active == false)
            this.setState({ active: true })
    }

    render() {
        return (
            <React.Fragment>
                {


                    this.state.active ?
                        <RegistrationTemplate />
                        :
                        <section className="principal">
                            <div className="principal">
                                <button onClick={this.handleClick} type="button" className="register">Cadastre-se</button>
                                <button type="button" className="login">Login</button>
                            </div>
                        </section>
                }

            </React.Fragment>
        )
    }
}