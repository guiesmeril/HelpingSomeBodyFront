
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2,FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
 
import logoImg from '../../assents/logo.png'

export default function Donates () {
    const [donates, setDonates] = useState([]);

    const history = useHistory();

    const email = localStorage.getItem ('email');
    const senha = localStorage.getItem ('senha');
    const nome = localStorage.getItem ('nome');
 
    const [donatess, setDonatess] = useState([]);

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

    async function handleDetailsDonate (id) {
        try{
            await api.get(`donates/${id}`,{
                headers: {
                    Authorization: email,
                    Authorization: senha
                }
            });
            setDonatess(donates.filter(donatess => donatess.id !== id))
        }catch(err){
            alert('Erro ao listar os detalhes da doação, tente novamente!')
        }
    }



    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
               <img src={logoImg} alt= "HelpingSomeBodyFront" />
               <span>Bem vindo(a), {nome}</span>

                <Link className ="button" to="newdonates">Cadastrar nova doação</Link>
                <button onClick={handleLogout} type="button"> 
                    <FiPower size ={18} color ="#3b5998" />
                </button>
            </header>
            <h1>Doações cadastradas</h1>
            <ul>
               {donates.map(donates => (
                   <li key ={donates.id}>

                   <strong>ID DA DOAÇÃO</strong> 
                   <p>{donates.id}</p> 

                   <strong>CASO:</strong>
                   <p>{donates.title}</p>
   
                   <strong>DESCRIÇÃO</strong>
                   <p>{donates.description}</p>

                   <strong>CIDADE</strong>
                   <p>{donates.cidade}</p>

                   <strong>ESTADO</strong>
                   <p>{donates.estado}</p>


                   <a class="button" href={"/details/" + donates.id }>Desejo ajudar!</a>

                   </li> 
               ))}

                    <Link className="back-link" to= "/">
                        <FiArrowLeft size={20} color="#3b5998" />
                        Voltar para a página principal!
                    </Link>

            </ul>
            
        </div>


    );
}