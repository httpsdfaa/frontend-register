import './RecoverPassTemplate.css';
import './index.css'
import { Link } from 'react-router-dom';

export default function RecoverPassTemplate() {
    return (
        <section className="recoverPass">
            <div className="recoverPass">
                        <h2>Esqueceu sua senha?</h2>
                        <Link to="/inscreva-se"><span className="createAccount">Não possuí uma conta?</span></Link>
                        <div className="nameInput">
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className="button">
                            <button className="nameButton" id="cancel">Cancelar</button>
                            <button className="nameButton" id="done">Pronto</button>
                        </div>
                    </div>
        </section>
    )
}