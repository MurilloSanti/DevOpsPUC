import React, { useState } from 'react'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (email === 'murillo-santiago@hotmail.com' && password === '123456') {
      setMessage('Acessado com sucesso!');
    } else {
      setMessage('Usuário ou senha incorretos!');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '200px', margin: '0 auto' }}>
      <h2>Minha Tela de Login</h2>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px' }}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px' }}
      />
      <button onClick={handleLogin} style={{ padding: '8px' }}>Acessar</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;