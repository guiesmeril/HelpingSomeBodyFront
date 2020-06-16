
import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assents/logo.png'

export default function Donates() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [cpf,setCpf] = useState('');
    const [telefone,setTelefone] = useState('');
    const [emails,setEmails] = useState('');
    const [cidade,setCidade] = useState('');
    const [estado,setEstado] = useState('');

    const history = useHistory();

    const email = localStorage.getItem('email');
    const senha = localStorage.getItem('senha');


    async function handleNewDonate(e){
        e.preventDefault();
    

    const data ={
        title,
        description,
        cpf,
        telefone,
        emails,
        cidade,
        estado
    }


    try {
        const response = await api.post('newdonates', data, {
            headers: {
                Authorization: email,
                Authorization: senha
            }
        })

        alert (`Cadastro de doação realizado, com sucesso!`);
        history.push('/donates');
    } catch (err){
        alert('Erro ao cadastrar doação, tente novamente!')
    }
    }
    return (
        <div className="new-donate-container">
        <div className="">
            <section>
            <img src={logoImg} alt="HelpingSomeBody"/>
            <h1>Cadastrar nova doação</h1>
            </section>

            <form onSubmit={handleNewDonate}>
                <input maxLength = "50"
                placeholder= "Titulo da doação" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                required/>

                <textarea 
                placeholder="Descrição da doação"
                value ={description}
                onChange={e => setDescription(e.target.value)}
                required/>

                <input maxLength = "11"
                placeholder = "Informe seu Telefone"
                value={telefone}
                type='number'
                onChange={e => setTelefone(e.target.value)}
                required/>

                <input 
                    type="email" 
                    placeholder="E-mail"
                    value ={emails}
                    onChange ={e => setEmails(e.target.value)}
                required/>
                    
                <input 
                        placeholder="Estado" 
                        maxLength = "2"
                        //style={{ width: 100 }} 
                        value ={estado}
                        onChange ={e => setEstado(e.target.value)}
                required />

                <input 
                        placeholder="Cidade" 
                        value ={cidade}
                        onChange ={e => setCidade(e.target.value)}
                required/>


 



                <button className="button" type ="submit"> Cadastrar</button>

                <Link className="back-link" to= "/donates">
                <FiArrowLeft size={20} color="#3b5998" />
                    Voltar para as Doações!
                </Link>
            </form>
        </div>
    </div>


    );
}
   
