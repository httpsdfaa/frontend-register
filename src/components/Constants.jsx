import React from "react";
import './Constants.css'

export function ErrorRequired(){
    return(
        <section className="errorRequired">
            <span>*Campo obrigatório</span>
        </section>
    )
}

export function ErrorAuth(){
    return(
        <section className="errorAuth">
            <span>email ou senha incorreto</span>
        </section>
    )
}