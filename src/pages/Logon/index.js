import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'


import logoImg from '../../assents/logo.png'
import Donates from '../Donates';



export default function Logon(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();


    async function handleLogin (e) {
        e.preventDefault();

        try {
            const response = await api.post('auth',{ email, senha });

            localStorage.setItem('email', response.data.email);
            localStorage.setItem('senha', senha);
            history.push('/donates');
        } catch (err){
            alert('Usuário ou Senha não incorretos, Favor Verificar.')
        }
    }

    return (

        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt ="Helping SomeBody" />
                <form onSubmit ={handleLogin}>
                    <h1>Faça seu Login</h1>

                    <input 
                    placeholder ="Seu E-mail" 
                    value ={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder ="Senha" 
                    type= "password" 
                    value ={senha}
                    onChange={e => setSenha(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to= "/register">
                        <FiLogIn size={20} color="#3b5998" />
                        Cadastra-se!
                    </Link>
                </form>
            </section>

            
        </div>
    );
}