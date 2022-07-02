import './LoginTemplate.css';
import './index.css'
import { Link } from 'react-router-dom';

export default function LoginTemplate() {
    return (
        <section className="login">
            <div className="login">
                        <h2>Entre em sua conta</h2>
                        <Link to="/inscreva-se"><span className="createAccount">Não possui uma conta?</span></Link>
                        <div className="nameInput">
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Senha' />
                        </div>
                        <Link to="/recover"><span className='forgotAccount'>Esqueceu sua senha?</span></Link>
                        <div className="button">
                            <button className="nameButton" id="cancel">Cancelar</button>
                            <button className="nameButton" id="done">Pronto</button>
                        </div>
                    </div>
        </section>
    )
}
