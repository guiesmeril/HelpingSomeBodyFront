import React, { useState, useEffect } from 'react';
import { Link, useHistory, } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';


import api from '../../services/api';

import './styles.css';
 
import logoImg from '../../assents/logo.png'



   export default function Home() {
    return (
        <div className="profile-container">
            <header>
               <img src={logoImg} alt= "HelpingSomeBodyFront" />
            </header>

            <h1>Página inicial</h1>

            <h1>Quem somos?</h1>
            <p>
                Somos estudantes que desenvolveu o site, para pessoas que estão passando por alguma dificuldade, venha a cadastrar no site onde outras pessoas 
                que tiverem condições de ajudar, possa entrar em contato!
            </p>

            <h1>Como doar?</h1>
            <p>Para visualizar as doações basta clicar no botão abaixo:</p>
            <a class="button" href="/donates"> Doações!</a>

            <h1>Contatos</h1>
            <p>Email: helpingsomebody@gmail.com</p>

            <p>Telefone: (81)98888-7777</p>

        </div>
        
    )
   }




