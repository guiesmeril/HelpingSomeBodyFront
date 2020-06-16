import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi'

import './styles.css';
import api from '../../services/api';

import logoImg from '../../assents/logo.png'

export default function Register() {
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState ('');
    const[telefone, setTelefone] = useState('');
    const[cidade, setCidade] = useState('');
    const[estado, setEstado] = useState('');
    const[cpf, setCpf] = useState('');
  

    const history = useHistory();

   async function handleRegister(e) {
        e.preventDefault();

        const data = {
            nome,
            email,
            senha,
            telefone,
            cidade,
            estado,
            cpf
        };
        try {
            const response = await api.post ('register', data);
        
        alert (`Cadastro realizado, com sucesso!`);

        history.push('/logon');
        } catch (err) {
            alert ('Erro no cadastro, tente novamente!')
        }
    }
    return (
        <div className="register-container">
            <div className="">
                <section>
                    <img src={logoImg} alt="Helping SomeBody" />
                </section>

                <form onSubmit ={handleRegister}>
                    <input 
                    placeholder= "Seu Nome" 
                    value={nome}
                    onChange ={e => setNome(e.target.value)}
                    required/>

                    <input 
                    placeholder ="CPF" 
                    maxLength = "11"
                    type='number'
                    value ={cpf}
                    onChange ={e => setCpf(e.target.value)}
                    required/>

                    <input 
                    type="email" 
                    placeholder="E-mail"
                    value ={email}
                    onChange ={e => setEmail(e.target.value)}
                    required/>

                    <input 
                    type= "password" 
                    placeholder="Senha"
                    value ={senha}
                    onChange ={e => setSenha(e.target.value)}
                    required/>

                    <input 
                    placeholder ="Telefone" 
                    maxLength = "11"
                    value ={telefone}
                    onChange ={e => setTelefone(e.target.value)}
                    required/>
                  
                  <div className="input-group">
                        <input 
                        placeholder="Cidade" 
                        value ={cidade}
                        onChange ={e => setCidade(e.target.value)}
                        />

                        <input 
                        placeholder="Estado" 
                        maxLength = "2"
                        //style={{ width: 100 }} 
                        value ={estado}
                        onChange ={e => setEstado(e.target.value)}
                        required/>
                    </div>
                    <button className="button" type ="submit"> Cadastrar</button>
                    <Link className="back-link" to= "/">
                        <FiArrowLeft size={20} color="#3b5998" />
                        Voltar para a Login!
                    </Link>
                </form>
            </div>
        </div>
    );
}