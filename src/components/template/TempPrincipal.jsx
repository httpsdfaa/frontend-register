import React from 'react';
import './TempPrincipal.css';
import { Link } from 'react-router-dom';

export default class TemplatePrincipal extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="principal">
                    <div className="principal">
                        <Link to='/inscreva-se'><button type="button" className="register">Cadastre-se</button></Link>
                        <Link to='/login'><button type="button" className="login">Login</button></Link>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}