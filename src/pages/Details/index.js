
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2,FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
 
import logoImg from '../../assents/logo.png'

class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            donates: [],
            email: localStorage.getItem('email'),
            senha: localStorage.getItem('senha'),
            nome: localStorage.getItem('nome'),
            donate: {}
        }
    }
 
    async componentDidMount() {
        await this.useEffect()
        this.getDonate()  
    }

    useEffect = async () => {
        const donates = await api.get('donates',{
            headers: {
                Authorization: this.state.email,
                Authorization: this.state.senha
            }
        })
        this.setState({ donates: donates.data });
    } 

    getDonate = () => {
        console.log(this.state.donates)
        const donate = this.state.donates.find( donate => donate.id == this.props.match.params.id )
        this.setState({ donate: donate })
    }

    handleLogout = () => {
        localStorage.clear();
        useHistory().push('/');
    }

    render() {
        return (
            <div className="profile-container">
                <header>
                <img src={logoImg} alt= "HelpingSomeBodyFront" />
                <span>Bem vindo(a), {this.state.nome}</span>
                </header>

                <h1>Detalhes da doação</h1>
                <ul>
                    <li key ={this.state.donate.id}>

                        <strong>ID DA DOAÇÃO:</strong>
                        <p>{this.state.donate.id}</p>

                        <strong>CASO:</strong>
                        <p>{this.state.donate.title}</p>
    
                        <strong>DESCRIÇÃO</strong>
                        <p>{this.state.donate.description}</p>
                    
                        <strong>TELEFONE:</strong>
                        <p>{this.state.donate.telefone}</p>

                        <strong>E-MAIL:</strong>
                        <p>{this.state.donate.emails}</p>

                        
                        <strong>CIDADE:</strong>
                        <p>{this.state.donate.cidade}</p>

                        
                        <strong>ESTADO:</strong>
                        <p>{this.state.donate.estado}</p>

                        <h1>Para ajudar essa doação, favor entrar em contato com o Telefone/E-mail que foi informado no cadastro da doação!</h1>
                        <h1> Desde já agradecemos sua intenção em ajudar.</h1>

                        <Link className="back-link" to= "/donates">
                        <FiArrowLeft size={20} color="#3b5998" />
                        Voltar para as Doações!
                        </Link>

                        </li> 
                </ul>
            </div>
        );
    }
}

export default Details