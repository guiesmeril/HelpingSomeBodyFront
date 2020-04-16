
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
 
import logoImg from '../../assents/logo.png'

export default function Donates () {
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

                <Link className ="button" to="newdonates">Cadastrar novo caso!</Link>
                <button onClick={handleLogout} type="button"> 
                    <FiPower size ={18} color ="#3b5998" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
               {donates.map(donates => (
                   <li key ={donates.id}>
                   <strong>CASO:</strong>
                   <p>{donates.title}</p>
   
                   <strong>DESCRIÇÃO</strong>
                   <p>{donates.description}</p>
   
                   <strong>CPF</strong>
                   <p>{donates.cpf}</p>

   

                   </li> 
               ))}
            </ul>
        </div>


    );
}