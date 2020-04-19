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
            
        </div>
        
    )
   }




