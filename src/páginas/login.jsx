import React from 'react';

function Login() {
  return (
    <>
      <div className="container">
        <div className="align">
          <h1 className='bigger'>LOGIN</h1>
          
          <form className="form">
            
            
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder='Email' />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder='Senha' />
            </div>
            <button type="submit" className="register-button">Login</button>
          </form>
          
          
        </div>
      </div>
    </>
  )
}

export default Login

