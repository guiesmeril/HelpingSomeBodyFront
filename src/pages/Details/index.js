
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2,FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
 
import logoImg from '../../assents/logo.png'

export default function Details () {
    const [donates, setDonates] = useState([]);

    const history = useHistory();

    const email = localStorage.getItem ('email');
    const senha = localStorage.getItem ('senha');
    const nome = localStorage.getItem ('nome');
 

    useEffect(()=> {
        api.get('donates',{
            headers: {
                Authorization: email,
                Authorization: senha
            }
        }).then(response => {
            setDonates(response.data);
        })
    }, [email,senha]);


    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
               <img src={logoImg} alt= "HelpingSomeBodyFront" />
               <span>Bem vindo(a), {nome}</span>
            </header>

            <h1>Detalhes da doação</h1>
            <ul>
               {donates.map(donates => (
                   <li key ={donates.id}>

                    <strong>ID DA DOAÇÃO:</strong>
                    <p>{donates.id}</p>

                    <strong>CASO:</strong>
                    <p>{donates.title}</p>
   
                    <strong>DESCRIÇÃO</strong>
                    <p>{donates.description}</p>
                
                    <strong>TELEFONE:</strong>
                    <p>{donates.telefone}</p>

                    <strong>E-MAIL:</strong>
                    <p>{donates.emails}</p>

                    <h1>Para ajudar essa doação, favor entrar em contato com o Telefone/E-mail que foi informado no cadastro da doação!</h1>
                    <h1> Desde já agradecemos sua intenção em ajudar.</h1>

                    <Link className="back-link" to= "/donates">
                    <FiArrowLeft size={20} color="#3b5998" />
                    Voltar para as Doações!
                    </Link>

                    </li> 
               ))}
            </ul>
        </div>


    );
}