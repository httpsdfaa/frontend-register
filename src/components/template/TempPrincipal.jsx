import React from 'react';
import './TempPrincipal.css';

export default class TemplatePrincipal extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="principal">
                    <div className="principal">
                        <button onClick={this.handleClickRegistration} type="button" className="register">Cadastre-se</button>
                        <button type="button" className="login">Login</button>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}