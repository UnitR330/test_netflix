// RegistrationModal.js

import React, { useState } from 'react';
import './RegistrationModal.css';

function RegistrationModal({ closeModal }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    console.log('Login:', login);
    console.log('Password:', password);
  
    closeModal();
  };

  return (
    <div className="registrationModal">
      <div className="registrationModal__content">
        <span className="registrationModal__close" onClick={closeModal}>
          &times;
        </span>
        <h3>Sign In</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Email or phone number:
            <input type="text" value={login} onChange={handleLoginChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>

          <br />
          <br />
          <button type="submit" style={{ backgroundColor: 'red', color: 'white' }}>
            Sign In
            </button>

            <br />
            <p>New to Net VIDEO stream service? Sign Up Now!</p>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            

        </form>
      </div>
    </div>
  );
}

export default RegistrationModal;
