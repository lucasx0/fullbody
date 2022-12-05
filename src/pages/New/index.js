import Header from "../../components/Header"
import Title from "../../components/Title"
import { FiPlusCircle } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import './new.css';



export default function New(){

  const [assunto, setAssunto] = useState('Suporte')
  const [genero, setGenero] = useState('M')
  const [complemento, setComplemento] = useState('')
  const [name, setname] = useState('');
  const [birthDate, setbirthDate] = useState('');
  const [email, setEmail] = useState('');
  const id = localStorage.getItem("SistemaUser");

  const { createCustomer } = useContext(AuthContext)

  function handleRegister(e){
    e.preventDefault()

    if(name !== '' && email !== '' && genero !== '' && birthDate !== ''){
      let obj = JSON.parse(id)
      createCustomer(name, email, birthDate, genero, obj.id, obj.jwt)
    }
    
  }
//chama quando troca o assunto
  function handleChangeSelect(e){
    setAssunto(e.target.value)
  }
//chama quando troca o genero
  function handleOptionChange(e){
  setGenero(e.target.value)
  }

  
  
  return(
    <div>
      <Header />

      <div className="content">
      <Title name="Novo aluno">
        <FiPlusCircle size={25} />
      </Title>

      <div className="container">
      <form className="form-profile" onSubmit={handleRegister}>
        <label>Aluno</label>
        <input type="text" placeholder="Nome do Aluno" value={name} onChange={ (e) => setname(e.target.value) } />
        <label>Email do Aluno</label>
        <input type="text" placeholder="email@email.com" value={email} onChange={ (e) => setEmail(e.target.value) }/>
        <label>Assunto</label>
        <select value={assunto} onChange={handleChangeSelect}>
          <option value="Perca de Peso">Perca de Peso</option>
          <option value="Avaliacao">Avaliação Fisica</option>
          <option value="FTreinos">Ficha de Treinos</option>
          <option value="GanhodeM">Hipertrofia</option>
          <option value="Acompanhamento">Personal Trainer</option>
          <option value="Financeiro">Financeiro</option>
        </select>

        <label>Status</label>
        <div className="status">
          <input type="radio" name="radio" value="M" onChange={handleOptionChange} checked={genero === 'M'}/>
          <span>M</span>

          <input type="radio" name="radio" value="F" onChange={handleOptionChange} checked={genero === 'F'}/>
          <span>F</span>
          </div>

        <br/>
        <label>Data de Nascimento</label>
        <input type="text" placeholder="data de nascimento" value={birthDate} onChange={(e) => setbirthDate(e.target.value)}></input>
        
        <br/>
         <label>Complemento</label>
         <textarea type="text" placeholder="Informações" value={complemento}
         onChange={(e) => setComplemento(e.target.value)}/>

        <br/>
         <button type="submit">Registrar</button>

      </form>
      </div>
      </div>
    </div>
  )
}