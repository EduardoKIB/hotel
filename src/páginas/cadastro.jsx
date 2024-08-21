import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';

function Cadastro() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('./login.jsx');
//   };

  return (
    <>
      <div className="container">
        <div className="align">
          <h1 className='bigger'>Detalhes do Hóspede</h1>
          
          <form className="form">
            <div>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder='Nome' />
            </div>
            <div>
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" placeholder='Telefone' />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder='Email' />
            </div>
            <div>
              <label htmlFor="country">País</label>
              <input type="text" id="country" placeholder='País' />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder='Senha' />
            </div>
            <button type="submit" className="register-button">Cadastrar</button>
          </form>
          
          <p>Já tem uma conta? <Link to='/login' className='link'>Entrar</Link></p>
        </div>
      </div>
    </>
  )
};

export default Cadastro
