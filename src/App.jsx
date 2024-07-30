import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'

function App() {

  const [form, setForm] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulário a ser enviado: ', form);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  return (
    <>
      <Header />

      <div className='contact-form'>
        <h2>Contato</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default App
